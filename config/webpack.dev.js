const paths = require("./paths");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: paths.appPublic,
    hot: true,
    port: 8000,
    quiet: true,
    historyApiFallback: true
  }
});
