'use strict'

const gulp = require('gulp')
const replace = require('gulp-replace')
const config = require('config').gulp

function replaceFunc(match, p1) {
  const manifest = require(global.MANIFEST)

  return global.DIST_DIR + manifest[p1]
}

gulp.task('css-js-replace', ['release-rev'], function () {
  return gulp.src([
    config.dist.path + '/css/**/*.css',
    config.dist.path + '/js/**/*.js'
  ], {
    base: config.dist.path
  })
  .pipe(replace(global.REGEX, replaceFunc))
  .pipe(gulp.dest(config.dist.path))
})

gulp.task('html-replace', ['css-js-replace'], function () {
  return gulp.src(config.src.view + '/**/*.jade')
    .pipe(replace(global.REGEX, replaceFunc))
    .pipe(gulp.dest(config.dist.view))
})
