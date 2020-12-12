const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const config = {
  mode: process.env.WEBPACK_MODE || "development",
  entry: {
    playground: path.resolve(`${__dirname}/playground.js`),
    index: path.resolve(`${__dirname}/index.js`),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          process.env.WEBPACK_MODE === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.css$/i,
        use: [
          process.env.WEBPACK_MODE === "production"
            ? MiniCssExtractPlugin.loader
            : "style-loader",
          "css-loader",
        ],
      },
    ],
  },
  output: {
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(`${__dirname}/playground.html`),
      filename: "playground.html",
      chunks: ["playground"],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(`${__dirname}/index.html`),
      chunks: ["index"],
      filename: "index.html",
    }),
  ],
};

console.log(config.module.rules);

if (process.env.WEBPACK_MODE === "production") {
  config.plugins.push(new MiniCssExtractPlugin());
}

module.exports = config;
