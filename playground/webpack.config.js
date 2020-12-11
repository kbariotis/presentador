const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  mode: process.env.WEPBACK_MODE || "development",
  entry: path.resolve(`${__dirname}/index.js`),
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
    filename: "index.bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(`${__dirname}/index.html`),
    }),
  ],
};
