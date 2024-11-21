const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const paths = require('../config');

// HTML task with component inclusion
function html() {
  return gulp.src(paths.html.src)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(paths.html.dest));
}

module.exports = html;
