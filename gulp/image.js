/**
 * Created by gaowhen on 15/7/21.
 */
var gulp = require('gulp')
var config = require('config').gulp
var cache = require('gulp-cached')
var gulpif = require('gulp-if')

gulp.task('image', function () {
	return gulp.src(config.src.img + '/**/*.+(png|gif|jpg|eot|woff|ttf|svg|ico)')
		.pipe(gulpif(isDev, cache()))
		.pipe(gulp.dest(config.build.img))
})
