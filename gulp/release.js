'use strict'

const gulp = require('gulp')
const uglify = require('gulp-uglify')
const del = require('del')
const jade = require('gulp-jade')
const config = require('config').gulp
const moment = require('moment')
const zip = require('gulp-zip')

function replaceFunc(match, p1) {
  var manifest = require(global.MANIFEST)
  return global.DIST_DIR + manifest[p1]
}

gulp.task('set-env', function () {
  global.isDev = false
	global.MANIFEST =  '../static/rev-manifest.json'
	global.time = moment().format('YYYYMMDDHHmm')
})

gulp.task('release-static', ['html-replace'], function () {
  return gulp.src(config.dist.path + '/**/*.+(js|css|png|gif|jpg|eot|woff|ttf|svg|ico)')
    .pipe(gulp.dest(config.release.path + '/' + time + '/static/'))
})

gulp.task('release-html', ['release-static'], function () {
  return gulp.src(config.dist.view + '/*.jade')
    .pipe(jade())
    .pipe(gulp.dest(config.release.path + '/' + time))
})

gulp.task('zip', ['release-html'], function () {
	return gulp.src(config.release.path + '/' + time + '/**/*')
		.pipe(zip(time + '.zip'))
		.pipe(gulp.dest(config.release.path))
})

gulp.task('release', [
  'set-env',
  'zip'
], function () {
  del(config.build.path)
})
