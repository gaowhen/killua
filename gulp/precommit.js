var config = require('config').gulp
var gulp = require('gulp')
var vfs = require('vinyl-fs')

function precommit() {
  return vfs.src([config.src.precommit])
    .pipe(vfs.symlink('.git/hooks/'))
}

gulp.task('precommit', precommit)
