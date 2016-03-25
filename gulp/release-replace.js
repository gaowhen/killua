var gulp = require('gulp')
var replace = require('gulp-replace')
var config = require('config').gulp

function replaceFunc(match, p1) {
  var manifest = require(global.MANIFEST)

  return global.DIST_DIR + manifest[p1]
}

gulp.task('css-js-replace', ['release-rev'], function () {
  return gulp.src([
    config.build.css + '/**/*.css',
    config.build.js + '/**/*.js'
  ])
  .pipe(replace(global.REGEX, replaceFunc))
  .pipe(gulp.dest(config.build.path))
})

gulp.task('html-replace', ['css-js-replace'], function () {
  return gulp.src(config.src.view + '/**/*.jade')
    .pipe(replace(global.REGEX, replaceFunc))
    .pipe(gulp.dest(config.build.view))
})
