var gulp = require('gulp')
var rev = require('gulp-rev')
var config = require('config').gulp

gulp.task('release-rev', ['release-js'], function () {
  return gulp.src([
    config.build.path + '/css/**/*.css',
    config.build.path + '/js/**/*.js',
    config.build.path + '/img/**/*.+(png|gif|jpg|eot|woff|ttf|svg|ico)'
  ], {
    base: config.build.path
  })
  .pipe(gulp.dest(config.dist.path))
  .pipe(rev())
  .pipe(gulp.dest(config.dist.path))
  .pipe(rev.manifest())
  .pipe(gulp.dest(config.dist.asset))
})
