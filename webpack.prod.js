const common = require('./webpack.common')
const webpack = require('webpack')
const merge = require('webpack-merge')

const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractCSS = new ExtractTextPlugin(
  'stylesheets/[name]-css.css'
)

const config = {
  module: {
    rules: [
      {
        test: /.css$/,
        use: extractCSS.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      }
    ]
  },

  plugins: [
    extractCSS,
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        return (
          module.context &&
          module.context.includes('node_modules')
        )
      }
    })
  ]
}

module.exports = merge.strategy({
  'module.rules': 'append',
  plugins: 'prepend'
})(common, config)
