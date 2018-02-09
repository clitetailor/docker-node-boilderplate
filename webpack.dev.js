const common = require('./webpack.common')
const merge = require('webpack-merge')
const webpack = require('webpack')
const path = require('path')

const ManifestPlugin = require('webpack-manifest-plugin')

const config = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },

  devtool: 'source-map',

  output: {
    filename: '[name].bundle.js'
  },

  module: {
    rules: [
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  plugins: [
    new ManifestPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true
    }),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20
    })
  ]
}

module.exports = merge.strategy({
  'output.filename': 'replace',
  'module.rules': 'append'
})(common, config)
