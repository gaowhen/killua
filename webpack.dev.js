var path = require('path')
var glob = require('globby')
var JS_PATH = path.join(__dirname, 'src/static/js')
var webpack = require('webpack')

function getEntries() {
  var map = {}
	var hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'

  var fileList = glob.sync([
    './src/static/js/**/*.js',
    '!./src/static/js/**/_*.js',
    '!./src/static/js/lib/**/*.js',
    '!./src/static/js/utils/**/*.js',
    '!./src/static/js/mods/**/*.js'
  ])

  fileList.forEach(function(file) {
    var name = path.basename(file)
    var filePath = path.relative(JS_PATH, file)
    if(name.match(/^[^_](.+)\.js$/)) {
      map[filePath] = [file, hotMiddlewareScript]
    }
  })

  return map
}

module.exports = {
  context: __dirname,
  entry: getEntries(),
  output: {
    path: '/static/build/js',
    filename: '[name]',
		publicPath: '/static/build/js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
        presets: ['es2015', 'react'],
        cacheDirectory: true
      }
    }]
  },
  resolve: {
    root: JS_PATH,
    alias: {
    }
  },
  plugins: [
		// Webpack 1.0
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devtool: "#inline-source-map",
  externals: {
    'jquery': '$',
    'react': 'React'
  }
}
