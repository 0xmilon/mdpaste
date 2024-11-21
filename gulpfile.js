const gulp = require('gulp');
const paths = require('./gulp/config');

// Import tasks
const css = require('./gulp/tasks/styles');
const js = require('./gulp/tasks/scripts');
const html = require('./gulp/tasks/templates');
const { serve, getBrowserSync } = require('./gulp/tasks/serve');

// Clean dist folder
async function clean() {
  const del = await import('del');
  return del.deleteSync(['dist/**/*']);
}

// Watch files
function watchFiles(done) {
  const browserSync = getBrowserSync();

  gulp.watch(paths.css.src, css).on('change', browserSync.reload);
  gulp.watch(paths.js.src, js).on('change', browserSync.reload);
  gulp.watch([paths.html.src, paths.components, paths.layouts], html).on('change', browserSync.reload);
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
