// ---
// WATCH TASK
// ---

// plugins
var gulp = require('gulp');

// configs
var config = require('../config');

// task
gulp.task('watch', ['browsersync'], function () {
    gulp.watch(config.scss.src, ['scss']);
    gulp.watch(config.js.src, ['js--reload']);
});
