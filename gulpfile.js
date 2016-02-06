'use strict';

var gulp  = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var gutil = require('gulp-util');

var config = {
  port: 8080,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    dist: './dist',
    src: './src'
  }
}

gulp.task('connect', function () {
  connect.server({
    root: [config.paths.dist],
    port: config.port,
    devBaseUrl: config.devBaseUrl,
    livereload: true
  });
});

gulp.task('open', ['connect'], function () {
  gulp.src(config.paths.src + '/index.html')
    .pipe(open('', { url: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function () {
  gulp.src(config.paths.html)
    .pipe(gulp.dest(config.paths.dist))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(config.paths.html, ['html']);
});

gulp.task('default', ['html', 'open', 'watch']);
