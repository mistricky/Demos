import * as Path from "path";
import nodeExternals from "webpack-node-externals";

const server = {
  target: "node",
  externals: [nodeExternals()],
  entry: "./main-server.js",
  output: {
    path: Path.resolve("./dist"),
    filename: "main-server.bundle.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [{ test: /\.js/, use: "babel-loader", exclude: /node_modules/ }]
  },
  resolve: {
    extensions: [".js", ".jsx", "json"]
  }
};

const browser = {
  entry: "./main.js",
  output: {
    path: Path.resolve("./dist"),
    filename: "main.bundle.js"
  },
  module: {
    rules: [{ test: /\.js/, use: "babel-loader", exclude: /node_modules/ }]
  },
  resolve: {
    extensions: [".js", ".jsx", "json"]
  }
};

export default [browser, server];
