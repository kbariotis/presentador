const path = require("path");
const webpack = require("webpack");
const { createFsFromVolume, Volume } = require("memfs");

const config = require("./webpack.config");

const compiler = () => {
  const compiler = webpack(config);

  compiler.outputFileSystem = createFsFromVolume(new Volume());
  compiler.outputFileSystem.join = path.join.bind(path);

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) reject(err);
      if (stats.hasErrors()) reject(new Error(stats.toJson().errors));

      resolve(stats);
    });
  });
};

test("Build", async () => {
  // TODO: parameterize input
  const stats = await compiler();

  if (stats.hasErrors()) {
    console.log(stats.toJson());
    throw new Error("Build failed");
  }
});
