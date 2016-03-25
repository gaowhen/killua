var gulp = require('gulp')
var config = require('config').gulp
var watch = require('gulp-watch')

gulp.task('watch', [
  //'webpack',
  'sass',
  'libjs',
  'image',
  'jade'
], function () {
  watch(config.src.css + '/**/*.sass', function () {
    gulp.start('sass')
  })

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
