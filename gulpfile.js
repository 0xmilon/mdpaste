const gulp = require('gulp');
const postcss = require('gulp-postcss');
const fileinclude = require('gulp-file-include');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create();
const rename = require('gulp-rename');
const del = require('del');

// File paths
const paths = {
  src: 'src',
  dist: 'dist',
  css: {
    src: 'src/css/**/*.css',
    dest: 'dist/css'
  },
  js: {
    src: 'src/js/**/*.js',
    dest: 'dist/js'
  },
  html: {
    src: 'src/pages/**/*.html',
    watch: ['src/pages/**/*.html', 'src/components/**/*.html', 'src/layouts/**/*.html'],
    dest: 'dist'
  },
  assets: {
    src: 'src/assets/**/*',
    dest: 'dist/assets'
  }
};

// Clean dist folder
function clean() {
  return del([paths.dist]);
}

// CSS task
function css() {
  const plugins = [
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano')
  ];

  return gulp.src(paths.css.src)
    .pipe(postcss(plugins))
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

// Copy assets
function assets() {
  return gulp.src(paths.assets.src)
    .pipe(gulp.dest(paths.assets.dest))
    .pipe(browserSync.stream());
}

// BrowserSync server
function serve(done) {
  browserSync.init({
    server: {
      baseDir: paths.dist
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
  gulp.watch(paths.html.watch, html);
  gulp.watch(paths.assets.src, assets);
  done();
}

// Complex tasks
const build = gulp.series(clean, gulp.parallel(css, js, html, assets));
const watch = gulp.series(build, serve, watchFiles);

// Export tasks
exports.clean = clean;
exports.css = css;
exports.js = js;
exports.html = html;
exports.assets = assets;
exports.build = build;
exports.watch = watch;
exports.default = watch;
