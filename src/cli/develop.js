const webpack = require("webpack");
const path = require("path");
const getConfig = require("../webpack/webpack.config.js");
const WebpackDevServer = require("webpack-dev-server");

async function develop(directory) {
  const config = getConfig({});
  config.plugins[0] = new webpack.DefinePlugin({
    PATH: JSON.stringify(path.resolve(directory)),
  });
  const compiler = webpack(config);

  const server = new WebpackDevServer(
    compiler,
    Object.assign({}, config.devServer, { noInfo: true })
  );

  server.listen(8080, "127.0.0.1", () => {
    console.log("📽 Start writing your presentation on http://localhost:8080");
  });
}

module.exports = { develop };
