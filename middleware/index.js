'use strict'

const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('../webpack.dev')

const staticPath = path.resolve(__dirname, '../static')
const viewPath = path.resolve(__dirname, '../view')

app.use('/static/', express.static(staticPath))
app.set('view engine', 'jade')
app.set('views', viewPath)

let compiler = webpack(config)

app.use(webpackMiddleware(compiler, {
	hot: true,
	watchOptions: {
		aggregateTimeout: 300,
		poll: true
	},
	publicPath: config.output.publicPath,
	stats: {
		colors: true
	},
	historyApiFallback: true,
}))

app.use(webpackHotMiddleware(compiler, {
  log: console.log,
  path: '/__webpack_hmr',
  heartbeat: 10 * 1000
}))
