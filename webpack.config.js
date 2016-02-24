var path = require("path");
module.exports = function(webpackConfig) {
  webpackConfig.module.postLoaders =  [{
    test:/\.jison$/,
    loader: 'jison-loader'
  }];
  // webpackConfig.output.libraryTarget = "var";
  return webpackConfig;
};