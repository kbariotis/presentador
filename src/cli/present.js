const { resolve, extname } = require("path");
const { createServer } = require("http");
const { readFileSync } = require("fs");

const { build } = require("./build");

async function present(directory) {
  await build(directory);

  createServer(function (request, response) {
    const path = resolve("dist" + request.url);

    try {
      let filePath;
      if (request.url === "/" || request.url === "") {
        filePath = `${path}/index.html`;
      } else {
        filePath = `${path}${extname(path) ? "" : ".html"}`;
      }
      const fileContents = readFileSync(filePath, { encoding: "utf-8" });

      response.statusCode = 200;
      response.end(fileContents);
    } catch (e) {
      response.statusCode = 404;
      response.end();
    }
  }).listen(8080, "127.0.0.1", function () {
    console.log(
      "📽 Presentation is ready to be viewed on http://localhost:8080"
    );
  });
}

module.exports = { present };
