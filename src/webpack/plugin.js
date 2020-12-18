const { Compilation } = require("webpack");
const { parse } = require("node-html-parser");
const path = require("path");
const ejs = require("ejs");
const fs = require("fs");

const store = require("./store");

const parseMetadata = (htmlSourceCode) => {
  const fullHTML = parse(htmlSourceCode);

  const fullText = fullHTML.text.replace(/\r\n|\n/g, " ");

  const title = `${fullText.split(" ").slice(0, 10).join(" ")}...`;
  const description = `... ${fullText.split(" ").slice(10, 30).join(" ")} ...`;

  return { title, description };
};

const findCSSFiles = (assets, matches) => {
  return Object.keys(assets).filter(
    (asset) =>
      matches.filter(
        (term) => asset.indexOf(term) > -1 && asset.indexOf(".css") > -1
      ).length
  );
};
const findJSFiles = (assets, matches) => {
  return Object.keys(assets).filter(
    (asset) =>
      matches.filter(
        (term) => asset.indexOf(term) > -1 && asset.indexOf(".js") > -1
      ).length
  );
};

const createAssetFromContent = (content) => ({
  source: () => {
    return Buffer.from(content, "utf8");
  },
  size: () => {
    return Buffer.byteLength(content, "utf8");
  },
});
module.exports = class PresentadorPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap("PresentadorPlugin", (compilation) => {
      compilation.hooks.processAssets.tap(
        {
          name: "PresentadorPlugin",
          stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
        },
        (assets) => {
          // collect metadata from the full HTML content
          const metadata = parseMetadata(
            Array.from(store.keys())
              .sort()
              .map((id) => store.get(`${id}`).html)
              .join("")
          );

          // process all slides from store
          for (const [number, content] of store) {
            // collect necessary scripts/styles for each slide
            const headAssets = ["main", `${content.state}-scss`];
            const scriptAssets = ["vendor", "main", `${content.state}-scss`];

            // load the template
            const htmlTemplate = fs.readFileSync(
              path.resolve(`${__dirname}/index.html`),
              { encoding: "utf-8" }
            );

            // render the template
            const htmlString = ejs
              .render(htmlTemplate, {
                metadata,
                headAssets: findCSSFiles(assets, headAssets),
                scriptAssets: findJSFiles(assets, scriptAssets),
                html: content.html,
              })
              .replace(/\>[\r\n ]+\</g, "><"); // eslint-disable-line

            compilation.fileDependencies.add(`${number}.html`);

            // add it to the compilation
            assets[`${number}.html`] = createAssetFromContent(htmlString);

            // for the first slide, create an index.html as well
            if (number === "1") {
              assets["index.html"] = createAssetFromContent(htmlString);
            }
          }
        }
      );
    });
  }
};
