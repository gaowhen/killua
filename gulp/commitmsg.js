var config = require('config').gulp
var gulp = require('gulp')
var vfs = require('vinyl-fs')

function commitmsg() {
  return vfs.src([config.src.commitmsg])
    .pipe(vfs.symlink('.git/hooks/'))
}

gulp.task('commitmsg', commitmsg)
