const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const  { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(common, { 
  mode: 'production',
  devtool:"cheap-module-source-map",
  output:{
    publicPath:  path.resolve(__dirname,'../dist/'),
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
            outputPath: '/img/',
            name: '[path][name].[hash:8].[ext]',
            useRelativePath: false,
                  fallback: 'file-loader',
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
                outputPath: '/fonts/',
                useRelativePath: false,
                fallback: 'file-loader'
            }
        }]
    }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ProgressBarPlugin({  // 显示进度
      format: chalk.green('Progressing') +  '[:bar]' + chalk.green(':percent') + '(:elapsed seconds)',
      clear: false
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].style.css'
    }),
    new OptimizeCSSAssetsPlugin({
      assetNameRegExp: /\.style\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { safe: true, discardComments: { removeAll: true } },
      canPrint: true
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: 'bundle_analyzer_report.html'
    })

  ]
})
