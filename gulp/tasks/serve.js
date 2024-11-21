const browserSync = require('browser-sync').create();
const paths = require('../config');

// BrowserSync server
function serve(done) {
  browserSync.init(paths.server);
  done();
}

// Get BrowserSync instance
function getBrowserSync() {
  return browserSync;
}

module.exports = {
  serve,
  getBrowserSync
};
