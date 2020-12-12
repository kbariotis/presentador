const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: process.env.WEPBACK_MODE || "development",
  entry: {
    playground: path.resolve(`${__dirname}/playground.js`),
    index: path.resolve(`${__dirname}/index.js`),
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
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
