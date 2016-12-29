var gulp = require('gulp');
var connect = require('gulp-connect');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var browserify = require('browserify');


gulp.task('connect', function (cb) {
    connect.server({
        root: '.',
        livereload: true,
        port: 88
    });
    cb();
});


//监听html less js
gulp.task('reload',function () {
    return gulp.src(['./*.html', './src/**/*'])
        .pipe(connect.reload());
});

gulp.task('watch', ['watch-html', 'watch-js']);

gulp.task('watch-html', function () {
    gulp.watch(['./*.html'], ['reload']);
});

gulp.task('watch-js', function () {
    gulp.watch(['./assets/**/*.js'], ['reload']);
});

gulp.task('default', ['connect', 'watch']);
gulp.task('port', ['uglify', 'watch']);
