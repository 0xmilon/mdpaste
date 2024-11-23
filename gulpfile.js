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
    src: [
      'src/assets/**/*',
      'src/favicon.ico',
      'src/robots.txt',
      'src/site.webmanifest'
    ],
    dest: 'dist'
  }
};

// Clean dist folder
function clean() {
  return del([paths.dist]);
}

// CSS task with source maps
function css() {
  const plugins = [
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano')({
      preset: ['default', {
        discardComments: { removeAll: true },
        normalizeWhitespace: false
      }]
    })
  ];

  return gulp.src(paths.css.src)
    .pipe(postcss(plugins))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.css.dest))
    .pipe(browserSync.stream());
}

// JavaScript task with minification
function js() {
  return gulp.src(paths.js.src)
    .pipe(terser({
      compress: {
        drop_console: true
      }
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.js.dest))
    .pipe(browserSync.stream());
}

// HTML task with component inclusion and minification
function html() {
  return gulp.src(paths.html.src)
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file',
      context: {
        isProd: process.env.NODE_ENV === 'production'
      }
    }))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
}

// Copy and optimize assets
function assets() {
  return gulp.src(paths.assets.src, { base: paths.src })
    .pipe(gulp.dest(paths.assets.dest));
}

// Development server
function serve(done) {
  browserSync.init({
    server: {
      baseDir: paths.dist,
      serveStaticOptions: {
        extensions: ['html']
      }
    },
    port: 3000,
    open: false,
    notify: false,
    ghostMode: false
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

// Build tasks
const build = gulp.series(clean, gulp.parallel(css, js, html, assets));
const dev = gulp.series(build, serve, watchFiles);

// Export tasks
exports.clean = clean;
exports.css = css;
exports.js = js;
exports.html = html;
exports.assets = assets;
exports.build = build;
exports.default = dev;
