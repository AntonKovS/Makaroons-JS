// $(document).ready(function () {
    'use strict';

    const {src, dest} = require('gulp');
    const gulp = require('gulp');
    const less = require('gulp-less');
    const cssmin = require('gulp-cssmin');
    const rename = require('gulp-rename');
    const {watch, series} = require('gulp');

// const watchLess = require('gulp-watch-less');

    function defaultTask() {
        return gulp.src('./css/styles.less')
            .pipe(less())
            .pipe(cssmin())
            .pipe(rename({suffix: '.min'}))
            .pipe(dest('./dist/'));
    }

    exports.default = defaultTask;

    exports.watch = function () {
        gulp.watch('./css/*.less', gulp.series('default'));
    };
// });