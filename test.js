var glob = require('glob');

glob("/Users/silentcloud/Desktop/atool-test-testing/!(node_modules)/**/*-test.js", {
  noext: false
}, function(err, files) {
  console.log(files);
})