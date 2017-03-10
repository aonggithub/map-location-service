var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/js');

var config = {
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: "/js/"
  },
  externals: {
    'ClientConfig': JSON.stringify(require('./config/dev.config.json'))
  },
  devServer: { inline: true },
  module : {
    loaders : [
      {
        test : /\.js?/,
        exclude: /node_modules/,
        include : APP_DIR,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config
