var webpack = require('webpack');
var path = require('path');

module.exports = function (config) {
  config.set({

    browsers: ['Chrome'],

    singleRun: true,

    frameworks: ['mocha'],

    files: [
      'tests.webpack.js'
    ],

    plugins: ['karma-chrome-launcher', 'karma-mocha', 'karma-sourcemap-loader',
      'karma-webpack', 'karma-coverage', 'karma-mocha-reporter'
    ],

    reporters: ['mocha', 'coverage'],

    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'],
    },

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },

    webpack: {
      devtool: 'inline-source-map',
      module: {
        // *optional* isparta options: istanbul behind isparta will use it
        isparta: {
          embedSource: true,
          noAutoWrap: true,
          // these babel options will be passed only to isparta and not to babel-loader
          babel: {
            presets: ['es2015', 'react']
          }
        },
        preLoaders: [
          // transpile all files except testing sources with babel as usual
          {
            test: /\.js$/,
            exclude: [
              path.resolve('src'),
              path.resolve('node_modules/')
            ],
            loader: 'babel-loader'
          },
          // transpile and instrument only testing sources with isparta
          {
            test: /\.js$/,
            include: path.resolve('src'),
            loader: 'isparta'
          }
        ]
      }
    },

    webpackServer: {
      noInfo: true
    }

  });
};
