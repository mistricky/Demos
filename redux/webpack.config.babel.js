import { HotModuleReplacementPlugin } from "webpack";
import * as Path from "path";

export default {
  context: Path.resolve("./src"),
  entry: "./main.js",
  output: {
    filename: "main.bundle.js",
    path: Path.resolve("."),
    publicPath: "/"
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    contentBase: "./public",
    port: 8080,
    inline: true,
    hot: true
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"]
  },
  plugins: [new HotModuleReplacementPlugin()]
};
