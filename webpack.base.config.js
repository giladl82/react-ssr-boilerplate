const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// const BundleAnalyzerPluginConfig = new BundleAnalyzerPlugin({
//   analyzerMode: 'static'
// })


const config = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [ 'html-loader' ]
      },
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [ 'css-loader', 'sass-loader' ]
        })
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|svg)$/,
        use: [ {
          loader: 'url-loader',
          options: { limit: 10000 } // Convert images < 10k to base64 strings
        }]
      }
    ]
  },

  resolve: {
    extensions: [ '.js', '.jsx', '.json' ]
  },

  // Enables source maps both for the client and server.
  devtool: 'source-map',

  plugins: [] // BundleAnalyzerPluginConfig
}

module.exports = config
