#!/usr/bin/env node

const { build } = require("./../src/cli/build");
const { develop } = require("./../src/cli/develop");
const { present } = require("./../src/cli/present");

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
      },
    },
    (argv) => build(argv.directory)
  )
  .example(
    "$0 serve -d src/",
    "Serve your presentation right from your local host"
  )
  .command(
    "present",
    "Present your presentation",
    {
      directory: {
        alias: "d",
        demandOption: true,
      },
    },
    (argv) => present(argv.directory)
  )
  .example("$0 develop -d src/", "Serve and develop locally your presentation")
  .command(
    "develop",
    "Develop your presentation",
    {
      directory: {
        alias: "d",
        demandOption: true,
      },
    },
    (argv) => develop(argv.directory)
  )
  .help("h")
  .demandCommand(1)
  .alias("h", "help").argv;
