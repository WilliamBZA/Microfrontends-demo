var webpack = require("webpack");
var path = require("path");

var DEV = path.resolve(__dirname, "js");
var OUTPUT = path.resolve(__dirname, "src");

var config = {
  entry: {
    Index : DEV + "/app/app.js"
  },

  output: {
    path: OUTPUT,
    filename: "bundle.js",
  },


  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",
      query: {
        presets: ["@babel/preset-env","@babel/preset-react"]
      } }
    ]
  }

};

module.exports = config;