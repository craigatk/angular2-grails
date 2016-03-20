var webpack = require('webpack'),
  path = require('path');

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

module.exports = {
  devtool: 'source-map',
  debug: true,
  entry: './src/main/angular/boot.ts',
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  output: {
    path: './grails-app/assets/javascripts/app/', // TODO: Initial attempt at placing output file outside of asset pipeline failed, try again
    filename: 'app.js'
  },
  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'source-map-loader', exclude: [ root('node_modules/rxjs') ] }
    ],
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader', exclude: [ /\.(spec|e2e)\.ts$/ ] },
      { test: /\.css/, loader: 'raw' },
      { test: /\.html$/, loader: 'raw' }
    ]
  }
};
