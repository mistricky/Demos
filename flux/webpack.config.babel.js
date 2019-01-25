import * as Path from "path";
import * as webpack from "webpack";

const { HotModuleReplacementPlugin } = webpack;

export default {
  entry: "./src/main.js",
  output: {
    filename: "main.bundle.js",
    path: Path.resolve("./dist"),
    publicPath: "/"
  },
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js/,
        use: ["babel-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"]
  },
  plugins: [new HotModuleReplacementPlugin()],
  devServer: {
    contentBase: "public",
    port: 8080,
    hot: true,
    inline: true
  }
};
