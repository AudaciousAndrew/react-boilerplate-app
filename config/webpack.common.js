const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const paths = require("./paths");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  target: "web",
  entry: {
    entry: paths.appEntryJS
  },
  resolve: {
    extensions: [".jsx", ".js"],
    alias: paths.alias
  },
  module: {
    rules: [
      {
        test: /\.jsx?/i,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.(sa|sc|c)ss$/i,
        exclude: /node_modules/,
        use: [
          isDev
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader
              },
          {
            loader: "css-loader",
            options: {
              modules: true,
              importLoaders: 2
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [["postcss-preset-env"]]
              }
            }
          },
          { loader: "sass-loader" }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHTML,
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? "[name].css" : "[name].[contenthash].css"
    })
  ]
};
