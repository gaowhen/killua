var gulp = require('gulp')
var sass = require('gulp-sass')
var config = require('config').gulp
var sourcemaps = require('gulp-sourcemaps')
var gulpif = require('gulp-if')
var cssnano = require('gulp-cssnano')
var replace = require('gulp-replace')

gulp.task('sass', function () {
  return gulp.src([
		config.src.css + '/**/*.+(sass|scss)',
		'!' + config.src.css + '/**/_*.+(sass|scss)'
	])
	.pipe(gulpif(isDev, sourcemaps.init()))
	.pipe(sass().on('error', sass.logError))
	.pipe(gulpif(isDev, replace(REGEX, REG_BUILD), cssnano()))
	.pipe(gulpif(isDev, sourcemaps.write('./map')))
	.pipe(gulp.dest(config.build.css))
})
