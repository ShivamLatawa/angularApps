var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('development/js/**/*')
});

gulp.task('html', function() {
  gulp.src('development/*.html')
});

gulp.task('css', function() {
  gulp.src('development/css/*.css')
});

gulp.task('watch', function() {
  gulp.watch('development/js/**/*', ['js']);
  gulp.watch('development/css/*.css', ['css']);
  gulp.watch(['development/*.html',
    'development/templates/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('development/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
