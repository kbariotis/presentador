const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const path = require("path");

const PresentadorPlugin = require("./plugin");

module.exports = (env) => {
  const config = {
    mode: env.production ? "production" : "development",
    entry: path.resolve(`${__dirname}/../client`),
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
      filename: "[name].[hash].js",
      chunkFilename: "[name].[hash].js",
    },
    optimization: {
      splitChunks: {
        chunks: "all",
        name: "vendor",
      },
    },
    devServer: {
      historyApiFallback: true,
    },
    plugins: [
      new webpack.DefinePlugin({
        PATH: JSON.stringify(path.resolve("website/")),
      }),
      new PresentadorPlugin(),
    ],
  };
  if (env.production) {
    config.plugins.push(new MiniCssExtractPlugin());
  }

  return config;
};
