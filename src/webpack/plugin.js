const vm = require("vm");
const path = require("path");
const ejs = require("ejs");
const fs = require("fs");

const store = {};

module.exports = class PresentadorPlugin {
  apply(compiler) {
    compiler.hooks.emit.tapAsync(
      "PresentadorPlugin",
      (compilation, callback) => {
        Object.keys(compilation.assets)
          .filter((file) => file.indexOf("-md.") > -1)
          .map((file) => {
            const filename = path.basename(file, path.extname(file));
            const content = store[filename.substring(0, 1)];

            compilation.fileDependencies.add(
              `${filename.substring(0, 1)}.html`
            );
            const headAssets = ["main.css", `${content.state}-scss.css`];
            const scriptAssets = [
              "vendor.bundle.js",
              "main.bundle.js",
              `${content.state}-scss.chunk.js`,
            ];
            const htmlTemplate = fs.readFileSync(
              path.resolve(`${__dirname}/index.html`),
              { encoding: "utf-8" }
            );

            const htmlString = ejs.render(htmlTemplate, {
              headAssets,
              scriptAssets,
              html: content.html,
            });

            compilation.assets[`${filename.substring(0, 1)}.html`] = {
              source: () => {
                return Buffer.from(htmlString, "utf8");
              },
              size: () => {
                return Buffer.byteLength(htmlString, "utf8");
              },
            };
          });

        callback();
      }
    );
    compiler.hooks.compilation.tap("PresentadorPlugin", (compilation) => {
      compilation.hooks.succeedModule.tap("PresentadorPlugin", (module) => {
        if (module.request && module.request.indexOf(".md") > -1) {
          const sandbox = {
            module: {
              exports: null,
            },
          };
          vm.runInNewContext(module._source._value, sandbox);
          const filename = path.basename(
            module.request,
            path.extname(module.request)
          );
          store[filename] = {
            html: sandbox.module.exports.html,
            state: sandbox.module.exports.state,
          };
        }
      });
    });
  }
};
