const gulp = require('gulp');
const postcss = require('gulp-postcss');
const rename = require('gulp-rename');
const paths = require('../config');

// CSS task
function css() {
  return gulp.src(paths.css.src)
    .pipe(postcss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.css.dest));
}

module.exports = css;
