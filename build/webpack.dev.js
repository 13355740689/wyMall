const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const webpack = require('webpack')
module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../'),
    index: 'main.html',
    compress: true,
    hot: true,
    host: 'localhost',
    port: 9000,
    proxy: {
      '/czxt': {
        target: 'http://39.105.122.153:3000',
        changeOrigin: true,
        secure: false
      }
    }
  },
  module:{
    rules:[
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        //use: ['cache-loader',{
        use: [{
          loader: 'url-loader',
          options: {
            esModule: false,
            limit: 1024 * 3, // 3k一下的图片转为bs64编码
            context: 'src/',
            outputPath: 'img/',
            publicPath: '../../img/',
            name: '[path][name].[hash:8].[ext]'
          }
        },
        {	// 压缩图片
          loader: 'image-webpack-loader',
          options: {
            disable: false
          }
        }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        // include: [config.SRC_PATH],//需要被loader 处理的文件或文件夹
        // exclude: [config.VENDORS_PATH], //排除不满足条件的文件夹（这样可以排除webpack查找不必要的文件）
        use: [{
            loader: 'url-loader',
            options: {
                name: 'fonts/[hash].[name].[ext]',
                limit: 8192,
                context: 'src/',
                outputPath: 'fonts/',
                publicPath: '../../fonts/',
                useRelativePath: false,
                fallback: 'file-loader'
            }
        }]
    }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new webpack.NamedModulesPlugin()
    // new webpack.HotModuleReplacementPlugin()
  ]
})
