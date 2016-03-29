'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const config = require('config').gulp
const sourcemaps = require('gulp-sourcemaps')
const gulpif = require('gulp-if')
const cssnano = require('gulp-cssnano')
const replace = require('gulp-replace')
const autoprefixer = require('gulp-autoprefixer')

gulp.task('sass', function () {
  return gulp.src([
		config.src.css + '/**/*.+(sass|scss)',
		'!' + config.src.css + '/**/_*.+(sass|scss)'
	])
	.pipe(gulpif(isDev, sourcemaps.init()))
	.pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer())
	.pipe(gulpif(isDev, replace(REGEX, REG_BUILD), cssnano()))
	.pipe(gulpif(isDev, sourcemaps.write('./map')))
	.pipe(gulp.dest(config.build.css))
})
