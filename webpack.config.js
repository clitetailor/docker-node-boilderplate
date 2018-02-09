const path = require('path')
const webpack = require('webpack')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

module.exports = {
  entry: {
    index: 'index'
  },

  context: path.join(__dirname, 'src'),

  output: {
    filename: '[name].[hash].js',
    path: path.join(__dirname, 'build')
  },

  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /.html$/,
        use: 'html-loader'
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: 'file-loader'
      }
    ]
  },

  resolve: {
    modules: ['node_modules', path.join(__dirname, 'src')],
    extensions: ['.js', '.json', '.css', '.html']
  },

  plugins: [
    new FaviconsWebpackPlugin('favicon.png'),
    new ManifestPlugin(),
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex',
      hashDigestLength: 20
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({
      title: 'Docker App',
      filename: 'index.html',
      template: 'index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    })
  ]
}
