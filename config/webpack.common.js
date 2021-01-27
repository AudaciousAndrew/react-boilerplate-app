const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const paths = require("./paths");

const isDev = process.env.NODE_ENV === "development";

module.exports = {
  target: ["web", "es5"],
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
        use: [
          isDev
            ? "style-loader"
            : {
                loader: MiniCssExtractPlugin.loader
              },
          {
            loader: "css-loader",
            options: {
              importLoaders: 2,
              modules: {
                auto: /styles/,
                localIdentName: `${ isDev ? '[path][name]__[local]' : '[hash:base64]'}`
              }
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
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              fallback: "file-loader"
            }
          }
        ]
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              generator: (content) => svgToMiniDataURI(content.toString())
            }
          }
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
      filename: isDev ? "styles.css" : "styles.[contenthash].css"
    })
  ]
};
