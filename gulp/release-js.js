'use strict'

const gulp = require('gulp')
const config = require('config').gulp
const uglify = require('gulp-uglify')

gulp.task('release-js', [
  //'webpack',
  'libjs',
  'sass',
  'image',
  'jade'
], function () {
  return gulp.src([
    config.build.js + '/**/*.js',
    '!' + config.build.js + '/**/*.min.js'
  ])
  .pipe(uglify({
    output: {
      ascii_only:true
    },
    compress: {
      drop_console:true
    }
  }))
  .pipe(gulp.dest(config.build.js))
})
