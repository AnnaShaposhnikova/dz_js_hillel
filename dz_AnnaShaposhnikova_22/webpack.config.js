const path = require("path");
const htmlWebpack = require("html-webpack-plugin");
module.exports = {
  entry: "./src/index.js",
  //   mode: "development",
  mode: "production",
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
  plugins: [new htmlWebpack({ template: "./src/index.html" })],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        //   use: [
        //       {loader: 'style-loader'},
        //       {loader: 'css-loader', options:{ modules: true}}
        //   ]
      },
    ],
  },
};
