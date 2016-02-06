'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var gutil       = require('gulp-util');
var browserify  = require('browserify');
var watchify    = require('watchify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var sourcemaps  = require('gulp-sourcemaps');

var config = {
  port: 8080,
  devBaseUrl: 'http://localhost',
  paths: {
    html:       './src/*.html',
    entryPoint: './src/js/main.jsx',
    jsSources:  './src/js/**/*.jsx',
    dist:       './dist',
    src:        './src'
  }
}

gulp.task('serve', function() {
  browserSync.init({
    open: false,
    logFileChanges: false,
    server: {
      baseDir: "./dist",
    }
  });

  gulp.watch("dist/*.html").on('change', browserSync.reload);
});


gulp.task('scripts', function () {
  var bundler = browserify({
    entries: [config.paths.entryPoint],
    cache: {},
    packageCache: {},
    debug: true
  });

  bundler.transform(babelify, {
    presets: ['es2015', 'react'],
    only: /src\/js/,
    sourceMaps: true
  });

  bundler.plugin(watchify, {
    ignoreWatch: ['**/node_modules/**'],
    poll: false
  });

  function bundle() {
    return bundler
      .bundle()
      .on('error', function (err) {
        gutil.log(gutil.colors.red('Browserify error:'), err.message);
        this.emit('end');
      })
      .pipe(source('bundle.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(sourcemaps.write('../maps'))
      .pipe(gulp.dest(config.paths.dist + '/js'))
      .pipe(browserSync.stream());
  }

  bundle(); // We have to call bundle() to get `update' events.

  bundler.on('update', function (ids) {
    bundle();

    ids.forEach(function (id) {
      gutil.log(gutil.colors.green('Updated:'), id);
    });
  });
});


gulp.task('default', ['scripts', 'serve']);
