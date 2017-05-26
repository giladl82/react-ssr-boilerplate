const baseConfig = require('./webpack.base.config')
const merge = require('webpack-merge')
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlubin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// extracting comon modules to vendor
const CommonsChunkPluginConfig = new webpack.optimize.CommonsChunkPlugin({
  name: 'vendor',
  filename: '/[name]/bundle.[hash].js'
})

// clean destination folder
const CleanWebpackPlubinConfig = new CleanWebpackPlubin([
  path.join(__dirname, `build/public`)
])

// extarct bundle js to html
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/client/template.html',
  path: path.join(__dirname, `build/public/client/`),
  filename: `index.ejs`,
  hash: true,
  inject: 'body'
})

// extarct css to html
const ExtractTextPluginConfig = new ExtractTextPlugin({
  filename: '/[name]/styles.css',
  allChunks: true
})

const NODE_ENV = process.env.NODE_ENV || 'development'

const vendorModules = [
  'axios',
  'classnames',
  'react',
  'react-dom',
  'react-intl',
  'react-redux',
  'react-router-dom',
  'redux',
  'redux-thunk'
]

const config = merge.smart(baseConfig, {
  entry: {
    vendor: vendorModules,
    client: path.resolve(__dirname, 'src/client/index.jsx')
  },

  node: {
    console: false,
    process: true,
    global: true,
    Buffer: true,
    __filename: 'mock',
    __dirname: 'mock',
    fs: 'empty'
  },

  output: {
    path: path.join(__dirname, `build`, 'public'),
    filename: '[name]/bundle.js',
    sourceMapFilename: '[name]/bundle.map.js'
  },

  plugins: [CleanWebpackPlubinConfig, CommonsChunkPluginConfig, HtmlWebpackPluginConfig, ExtractTextPluginConfig]
})

module.exports = config

