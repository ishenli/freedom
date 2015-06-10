'use strict';

var gulp = require('gulp');
var less = require('gulp-less');

var tpl2js = require('gulp-tpl2js');

gulp.task('html2js', function () {
    return gulp.src('src/**/*.tpl', {base: 'src'})
        .pipe(tpl2js({
            type: 'amd'
        }))
        .pipe(gulp.dest('src'));
});

gulp.task('less', function () {
    return gulp.src('src/main.less')
        .pipe(less())
        .pipe(gulp.dest('src'));
});

gulp.task('watch', function () {
    gulp.watch('src/**/*.tpl', ['html2js']);
    gulp.watch('src/**/**.less', ['less']);
});