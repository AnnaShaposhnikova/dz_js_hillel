const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/shared/index.js",
  mode: "production",
  // mode:"development",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    open: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/shared/index.html" })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader","css-loader" ],
      },
    ],
  },
};
