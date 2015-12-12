var webpack = require('webpack');

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
        loaders: [
          {test: /\.js(x)?$/, loader: 'babel-loader'}
        ],
        postLoaders: [
          {test: /\.js(x)?$/, exclude: /(test|node_modules)\//, loader: 'istanbul-instrumenter'}
        ]
      }
    },

    webpackServer: {
      noInfo: true
    }

  });
};
