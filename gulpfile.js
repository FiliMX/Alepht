var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    rename = require('gulp-rename'),
    path = {},
    stylusTasks = ['styles'];

path.watch = {
    stylus: ['./assets/stylus/**/*.styl']
};

gulp.task('watch', function () {
    gulp.watch(path.watch.stylus, stylusTasks);
});

gulp.task('styles', function () {
  gulp
    .src('./assets/stylus/main.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./assets/css/'));
});