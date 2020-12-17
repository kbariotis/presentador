const { Compilation } = require("webpack");
const { parse } = require("node-html-parser");
const vm = require("vm");
const path = require("path");
const ejs = require("ejs");
const fs = require("fs");

const store = {};

const parseMetadata = (htmlSourceCode) => {
  const fullHTML = parse(htmlSourceCode);

  const fullText = fullHTML.text.replace(/\r\n|\n/g, " ");

  const title = `${fullText.split(" ").slice(0, 10).join(" ")}...`;
  const description = `... ${fullText.split(" ").slice(10, 30).join(" ")} ...`;

  return { title, description };
};

module.exports = class PresentadorPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap("PresentadorPlugin", (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: "MyPlugin",
          stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS, // see below for more stages
        },
        (assets) => {
          const metadata = parseMetadata(
            Object.keys(store)
              .sort()
              .map((id) => store[id].html)
              .join("")
          );
          Object.keys(assets)
            .filter((file) => file.indexOf("-md.") > -1)
            .map((file) => {
              const filename = path.basename(file, path.extname(file));
              const number = filename.replace(/\-md\..*/, ""); // eslint-disable-line
              const content = store[number];

              compilation.fileDependencies.add(`${number}.html`);
              const headAssets = ["main", `${content.state}-scss`];
              const scriptAssets = ["vendor", "main", `${content.state}-scss`];
              const htmlTemplate = fs.readFileSync(
                path.resolve(`${__dirname}/index.html`),
                { encoding: "utf-8" }
              );

              const htmlString = ejs
                .render(htmlTemplate, {
                  metadata,
                  headAssets: Object.keys(compilation.assets).filter(
                    (asset) =>
                      headAssets.filter(
                        (term) =>
                          asset.indexOf(term) > -1 && asset.indexOf(".css") > -1
                      ).length
                  ),
                  scriptAssets: Object.keys(compilation.assets).filter(
                    (asset) =>
                      scriptAssets.filter(
                        (term) =>
                          asset.indexOf(term) > -1 && asset.indexOf(".js") > -1
                      ).length
                  ),
                  html: content.html,
                })
                .replace(/\>[\r\n ]+\</g, "><"); // eslint-disable-line

              compilation.assets[`${number}.html`] = {
                source: () => {
                  return Buffer.from(htmlString, "utf8");
                },
                size: () => {
                  return Buffer.byteLength(htmlString, "utf8");
                },
              };

              if (number === "1") {
                compilation.assets["index.html"] = {
                  source: () => {
                    return Buffer.from(htmlString, "utf8");
                  },
                  size: () => {
                    return Buffer.byteLength(htmlString, "utf8");
                  },
                };
              }
            });
        }
      );
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
