// Dependencies Gulp
var gulp = require('gulp'),
    stylus = require('gulp-stylus'),
    rename = require('gulp-rename'),
    cmq  = require('gulp-combine-mq'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    minify = require('gulp-minify');
    path = {},
    stylusTasks = ['styles'];
    transformCSSTasks = ['cmq', 'autoprefixer'];

// ----------- $CSS -----------

// Watch
path.watch = {
    stylus: ['./dev/stylus/**/*.styl'],
    transformCSS: ['./dev/css/**/*.css']
};

// Task (watch)
gulp.task('watch', function () {
    gulp.watch(path.watch.stylus, stylusTasks);
    gulp.watch(path.watch.transformCSS, transformCSSTasks);
});

// Task (styles)
gulp.task('styles', function () {
    gulp
        .src('./dev/stylus/main.styl')
        .pipe(stylus({
            compress: true
        }))
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('./dev/css/'));
});

// Task (combine media queries)
gulp.task('cmq', function () {
  gulp.src('./dev/css/*.css')
    .pipe(cmq({
      log: true
    }))
    .pipe(gulp.dest('./dev/css/'));
});

// Task (autoprefixer)
gulp.task('autoprefixer', function () {
    return gulp.src('./dev/css/*.css')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: true
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest('./assets/css/'));
});





// ----------- $JavaScript -----------

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