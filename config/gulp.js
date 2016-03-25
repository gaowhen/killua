var path = require('path')

var src = {
  path: path.resolve(__dirname, '../src/static'),
  js: path.resolve(__dirname, '../src/static/js'),
  css: path.resolve(__dirname, '../src/static/css'),
  img: path.resolve(__dirname, '../src/static/img'),
  precommit: path.resolve(__dirname, '../pre-commit'),
  commitmsg: path.resolve(__dirname, '../commit-msg'),
  git: path.resolve(__dirname, '../.git'),
  view: path.resolve(__dirname, '../src/template'),
  pkg: path.resolve(__dirname, '../package.json'),
}

var build = {
	asset: path.resolve(__dirname, '../static'),
  path: path.resolve(__dirname, '../static/build'),
  js: path.resolve(__dirname, '../static/build/js'),
  css: path.resolve(__dirname, '../static/build/css'),
  img: path.resolve(__dirname, '../static/build/img'),
  view: path.resolve(__dirname, '../view'),
  pkg: path.resolve(__dirname, '../'),
  webpack: path.resolve(__dirname, '../static/build/js/webpack'),
}

var dist = {
  path: path.resolve(__dirname, '../static/dist'),
  js: path.resolve(__dirname, '../static/dist/js'),
  css: path.resolve(__dirname, '../static/dist/css'),
  img: path.resolve(__dirname, '../static/dist/img'),
  view: path.resolve(__dirname, '../view'),
  pkg: path.resolve(__dirname, '../'),
}

var release = {
  path: path.resolve(__dirname, '../release'),
	asset: path.resolve(__dirname, '../release/static')
}

var config = {
  src: src,
	build: build,
  dist: dist,
	release: release,
}

module.exports = config
