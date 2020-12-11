const webpack = require("webpack");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  entry: path.resolve(`${__dirname}/../client/index.js`),
  module: {
    rules: [
      {
        test: /\.md$/,
        use: path.resolve(`${__dirname}/loader.js`),
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  output: {
    filename: "index.bundle.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      PATH: JSON.stringify(path.resolve("fixtures/")),
    }),
    new HtmlWebpackPlugin(),
  ],
};
