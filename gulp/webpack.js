var gulp = require('gulp')
var config = require('config').gulp
var cache = require('gulp-cached')
var gulpif = require('gulp-if')
var replace = require('gulp-replace')

gulp.task('webpack', function() {
  return gulp.src([
      config.build.webpack + '/**/*.js',
    ])
   .pipe(gulpif(isDev, cache()))
	 .pipe(gulpif(isDev, replace(REGEX, REG_BUILD)))
   .pipe(gulp.dest(config.build.js))
})
