import * as Path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import * as webpack from "webpack";

export default {
  mode: "development",
  entry: "./src/main.jsx",
  output: {
    filename: "main.bundle.js",
    path: Path.join(__dirname, "bld")
  },
  devServer: {
    contentBase: "./bld",
    hot: true,
    inline: true,
    port: 8088
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: "babel-loader",
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: Path.resolve(__dirname, Path.join("src", "index.html"))
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
