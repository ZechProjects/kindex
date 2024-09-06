const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  plugins: [new ReactRefreshWebpackPlugin()],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: [path.resolve(__dirname, "src"), "node_modules"], // Add this line
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: true,
    port: 9000,
    hot: true,
  },
};
