// File paths configuration
module.exports = {
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
  layouts: 'src/layouts/**/*.html',
  server: {
    baseDir: './dist',
    port: 3000,
    open: true,
    notify: false
  }
};
