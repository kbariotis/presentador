#!/usr/bin/env node

const webpack = require("webpack");
const path = require("path");
const getConfig = require("../src/webpack/webpack.config.js");
const WebpackDevServer = require("webpack-dev-server");

require("yargs/yargs")(process.argv.slice(2))
  .usage("Usage: $0 [command]")
  .example("$0 build -d src/", "Build your presentation")
  .command(
    "build",
    "Build your presentation",
    {
      directory: {
        alias: "d",
        demandOption: true,
        default: ".",
      },
    },
    async (argv) => {
      const config = getConfig({ production: true });
      config.plugins[0] = new webpack.DefinePlugin({
        PATH: JSON.stringify(path.resolve(argv.directory)),
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
    }
  )
  .example("$0 serve -d src/", "Serve and develop locally your presentation")
  .command(
    "serve",
    "Develop your presentation",
    {
      directory: {
        alias: "d",
        demandOption: true,
        default: ".",
      },
    },
    async (argv) => {
      const config = getConfig({});
      config.plugins[0] = new webpack.DefinePlugin({
        PATH: JSON.stringify(path.resolve(argv.directory)),
      });
      const compiler = webpack(config);

      const server = new WebpackDevServer(compiler);

      server.listen(8080, "127.0.0.1", () => {
        console.log("Starting server on http://localhost:8080");
      });
    }
  )
  .help("h")
  .demandCommand(1)
  .alias("h", "help").argv;
