var gulp = require('gulp')
var config = require('config').gulp
var watch = require('gulp-watch')
var livereload = require('gulp-livereload')

gulp.task('watch', [
  //'webpack',
  'sass',
  'libjs',
  'image',
  'jade'
], function () {
  livereload.listen()

  watch(config.src.css + '/**/*.+(sass|scss)', function () {
    gulp.start('sass')
  }).on('change', livereload.changed)

  watch(config.src.img + '/**/*.+(png|gif|jpg|eot|woff|ttf|svg|ico)', function () {
    gulp.start('image')
  })

  watch(config.src.view + '/**/*.jade', function () {
    gulp.start('jade')
  })

  //watch(config.build.webpack + '/**/*.js', function() {
  //  gulp.start('webpack')
  //})
})
