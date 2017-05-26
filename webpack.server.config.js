// External dependencies
const fs = require('fs')
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlubin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const baseConfig = require('./webpack.base.config')

// extarct css to html
const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: '[name].bundle.css',
  allChunks: true
})

const CleanWebpackPlubinConfig = new CleanWebpackPlubin([
  path.join(__dirname, `../build/server`)
])

// inject source map support on top of the build file
const BannerPluginConfig = new webpack.BannerPlugin({
  banner: 'require("source-map-support").install();',
  raw: true,
  entryOnly: false
})

const NODE_ENV = process.env.NODE_ENV || 'development'

function getExternals () {
  var externals = {}

  fs.readdirSync(path.resolve(__dirname, 'node_modules'))
    .filter(function (module) {
      return [ '.bin' ].indexOf(module) === -1
    })
    .forEach(function (module) {
      externals[ module ] = 'commonjs ' + module
    })

  return externals
}

var config = merge.smart(baseConfig, {
  entry: path.resolve(__dirname, 'src/server/index.js'),

  externals: getExternals(),

  node: {
    __filename: false,
    __dirname: false
  },

  output: {
    path: path.resolve(__dirname, 'build/server'),
    filename: 'bundle.js'
  },

  target: 'node',

  plugins: [
    CleanWebpackPlubinConfig, BannerPluginConfig, ExtractTextPluginConfig
  ]
})

module.exports = config
