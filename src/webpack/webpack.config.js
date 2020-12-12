const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env) => {
  const config = {
    mode: env.production ? "production" : "development",
    entry: path.resolve(`${__dirname}/../client/index.js`),
    module: {
      rules: [
        {
          test: /\.md$/,
          use: path.resolve(`${__dirname}/loader.js`),
        },
        {
          test: /\.s[ac]ss$/i,
          use: [
            env.production ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.css$/i,
          use: [
            env.production ? MiniCssExtractPlugin.loader : "style-loader",
            "css-loader",
          ],
        },
      ],
    },
    output: {
      filename: "[name].bundle.js",
    },
    optimization: {
      splitChunks: {
        chunks: "all",
        name: "vendor",
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        PATH: JSON.stringify(path.resolve("website/")),
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(`${__dirname}/index.html`),
      }),
    ],
  };
  if (env.production) {
    config.plugins.push(new MiniCssExtractPlugin());
  }

  return config;
};
