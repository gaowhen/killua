var gulp = require('gulp')
var rev = require('gulp-rev')
var config = require('config').gulp

gulp.task('release-rev', ['release-js'], function () {
  return gulp.src([
    config.build.css + '/**/*.css',
    config.build.js + '/**/*.js',
    config.build.img + '/**/*.+(png|gif|jpg|eot|woff|ttf|svg|ico)'
  ], {
    base: config.build.path
  })
  .pipe(gulp.dest(config.build.path))
  .pipe(rev())
  .pipe(gulp.dest(config.dist.path))
  .pipe(rev.manifest())
  .pipe(gulp.dest(config.build.asset))
})
