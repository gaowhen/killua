var gulp = require('gulp')
var config = require('config').gulp
var cssnano = require('gulp-cssnano')
var sourcemaps = require('gulp-sourcemaps')

function compile() {
  gulp.src(config.src.css + '/**/*.less')
    .pipe(sourcemaps.init())
    .pipe(less())
    .pipe(size())
    .pipe(cssnano())
    .pipe(size())
    .pipe(sourcemaps.write('./map'))
    .pipe(gulp.dest(config.dist.css))
}

gulp.task('minify', compile)

module.exports = compile
