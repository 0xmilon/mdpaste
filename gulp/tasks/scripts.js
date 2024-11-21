const gulp = require('gulp');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const paths = require('../config');

// JavaScript task
function js() {
  return gulp.src(paths.js.src)
    .pipe(terser())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.js.dest));
}

module.exports = js;
