var gulp = require('gulp')
var requireDir = require('require-dir')

global.isDev = true
global.REGEX = /\{\{\{(\S*?)\}\}\}/g
global.REG_BUILD = '/static/build/$1'
global.DIST_DIR = '/static/'

requireDir('./gulp/', {recurse: true})
