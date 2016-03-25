var gulp = require('gulp')
var config = require('config').gulp
var gulpif = require('gulp-if')
var replace = require('gulp-replace')

gulp.task('jade', function() {
	return gulp.src(config.src.view + '/**/*.jade')
		.pipe(gulpif(isDev, replace(REGEX, REG_BUILD)))
    .pipe(gulp.dest(config.build.view))
})
