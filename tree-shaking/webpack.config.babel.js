import * as Path from "path";
import * as webpack from "webpack";

const { HotModuleReplacementPlugin } = webpack;
const { ModuleConcatenationPlugin } = webpack.optimize;

export default {
  entry: () =>
    new Promise(resolve =>
      resolve({
        main: "./main.js",
        login: "./login.js"
      })
    ),
  context: Path.resolve("./app"),
  mode: "development",
  output: {
    publicPath: "http://example.com/asserts/",
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"]
      }
      // { test: /\.js/, use: "babel-loader", exclude: /\.css/ }
    ]
  },
  plugins: [new HotModuleReplacementPlugin(), new ModuleConcatenationPlugin()],
  node: {
    fs: "empty"
  },
  devServer: {
    contentBase: "./app",
    port: 9999,
    inline: true,
    hot: true
  }
};
