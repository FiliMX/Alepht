// Dependencies Gulp
var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify'),
    path = {},
    stylusTasks = ['styles'];

// Watch
path.watch = {
    stylus: ['./dev/stylus/**/*.styl']
};

// Task (watch)
gulp.task('watch', function () {
    gulp.watch(path.watch.stylus, stylusTasks);
});

// Task (styles)
gulp.task('styles', function () {
    gulp
        .src('./dev/stylus/main.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('./assets/css/'));
});

// Task (concat)
gulp.task('concat', function() {
    gulp
        .src('./dev/js/**/**.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('./assets/js/'));

});

// Task (minify)
gulp.task('minify', function(){
    gulp
        .src('./assets/js/index.js')
        .pipe(minify({
            ext:{
                src:'-debug.js',
                min:'.js'
            },
            exclude: ['tasks'],
            ignoreFiles: ['.combo.js', '-min.js']
        }))
        .pipe(gulp.dest('./assets/js/'))
});