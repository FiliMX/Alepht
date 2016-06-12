var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
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

gulp.task('concat', function(){
    gulp
        .src('assets/js-dev/**/*.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('assets/js/'));

});