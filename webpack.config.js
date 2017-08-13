const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: [
    './src/index.js',
  ],
  target: 'node',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
  },
  externals: [nodeExternals()], // excludes node_modules
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      }
   ]
  },
};
