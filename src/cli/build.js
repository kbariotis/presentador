const webpack = require("webpack");
const path = require("path");
const getConfig = require("../webpack/webpack.config.js");

async function build(directory) {
  console.log("⚙️ Building your presentation");

  const config = getConfig({ production: true });
  config.plugins[0] = new webpack.DefinePlugin({
    PATH: JSON.stringify(path.resolve(directory)),
  });
  const compiler = webpack(config);

  const stats = await new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);
      if (stats && stats.hasErrors()) {
        console.log(stats.toJson());
        reject(new Error(stats.toJson().errors));
      }

      resolve(stats);
    });
  });

  const info = stats.toJson();

  if (stats && stats.hasErrors()) {
    console.error(info.errors);
  }

  if (stats && stats.hasWarnings()) {
    console.warn(info.warnings);
  }

  console.log("⚙️ Presentation ready");
}
module.exports = { build };
