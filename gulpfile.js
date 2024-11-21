const gulp = require('gulp');
const postcss = require('gulp-postcss');
const fileinclude = require('gulp-file-include');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');

// File paths
const paths = {
  css: {
    src: 'src/css/**/*.css',
    dest: 'dist/css/'
  },
  js: {
    src: 'src/js/**/*.js',
    dest: 'dist/js/'
  },
  html: {
    src: 'src/pages/**/*.html',
    dest: 'dist/'
  },
  components: 'src/components/**/*.html',
  layouts: 'src/layouts/**/*.html'
};

// CSS task
function css() {
  return gulp.src(paths.css.src)
    .pipe(postcss())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.css.dest))
    .pipe(browserSync.stream());
}

// JavaScript task
function js() {
  return gulp.src(paths.js.src)
    .pipe(terser())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.js.dest))
    .pipe(browserSync.stream());
}

// HTML task with component inclusion
function html() {
  return gulp.src(paths.html.src)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
}

// Clean dist folder
async function clean() {
  const del = await import('del');
  return del.deleteSync(['dist/**/*']);
}

// BrowserSync server
function serve(done) {
  browserSync.init({
    server: {
      baseDir: './dist'
    },
    port: 3000,
    open: true,
    notify: false
  });
  done();
}

// Watch files
function watchFiles(done) {
  gulp.watch(paths.css.src, css);
  gulp.watch(paths.js.src, js);
  gulp.watch([paths.html.src, paths.components, paths.layouts], html);
  gulp.watch('dist/**/*').on('change', browserSync.reload);
  done();
}

// Complex tasks
const build = gulp.series(clean, gulp.parallel(css, js), html);
const watch = gulp.series(build, serve, watchFiles);

// Export tasks
exports.css = css;
exports.js = js;
exports.html = html;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;
