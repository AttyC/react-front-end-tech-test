import path from 'path'
import webpack from 'webpack'
import javascript from './loader-configs/javascript'
import style from './loader-configs/style'
import font from './loader-configs/font'
import html from './loader-configs/html'
import image from './loader-configs/image'
import ExtractTextPlugin from 'extract-text-webpack-plugin'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import ManifestPlugin from 'webpack-manifest-plugin'

const root = process.cwd()

export default {
  entry: {
    bundle: path.resolve(root, 'src')
  },

  output: {
    path: path.resolve(root, 'build/assets/scripts'),
    publicPath: `/assets/`,
    filename: '[name].js'
  },

  module: {
    rules: [
      javascript,
      style,
      font,
      html,
      image
    ]
  },

  plugins: [
    new CleanWebpackPlugin(['build'], { root }),

    new ExtractTextPlugin({
      filename: 'styles.[chunkhash:8].css',
      allChunks: true,
      ignoreOrder: true
    }),

    // Un-comment this if you must use jake weary :(
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery: 'jquery'
    // })
  ]
}
