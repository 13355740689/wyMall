const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MPAConfig = require('./MPA.config.js')
// const Purify=require('purifycss-webpack'); //css优化去重复无效代码
// const glob=require('glob');  //css优化

const utils = require('./utils')


const srcPath = utils.resolve('src')

const isDev = process.env.NODE_ENV === 'development'
const pluginsArr = [
  new VueLoaderPlugin(),
  ...MPAConfig.plugins,
  new MiniCssExtractPlugin({
    chunkFilename: utils.assetsPath("css/[name].[chunkhash:7].css")
  }),
  new Webpack.ProvidePlugin({
    jQuery: "jquery",
    $: "jquery"
})
  // new Webpack.ProvidePlugin({
  //   Vue: ['vue/dist/vue.esm.js', 'default']
  // }),
  // new HtmlWebpackPlugin({
  //   title: 'proindex',
  //   filename: 'proindex.html',
  //   template:path.resolve(__dirname,'../template/index.html')
  // })
]
// !isDev && pluginsArr.push(  
//   new Purify({         //css优化去重去无效代码
//   paths:glob.sync(path.join(__dirname,"../src/pages/*.vue"))
// }));
module.exports = {
    entry:MPAConfig.entry,
    
    output: {
        filename: 'js/[name].[hash].js',   
        path: path.resolve(__dirname,'../dist')
    },
    resolve: {
        extensions: [".json", ".js", ".jsx",".vue"],
        alias: {
          "@": path.join(__dirname, "../src"),
          'pages': path.join(__dirname, "../src/pages")
        }
      },
      externals: {
          'vue': 'Vue',
          'vue-router': 'VueRouter',
          'vuex': 'Vuex',
          'echarts': 'echarts',
          'axios': 'axios',
          'BMap':'BMap'
      },
      optimization:{
        splitChunks: {  
          cacheGroups: {  //缓存组 缓存公共代码

              commons: {  
                  name: "commons",
                  chunks: "initial",  
                  minSize:0,      //代码最小多大，进行抽离
                  minChunks:2,    //代码复 2 次以上的抽离
                  priority: 1 
              },
              vendors: { 
                  test: /node_modules/,
                   name: 'vendors', 
                   minSize: 0,
                    minChunks: 1, 
                    chunks: 'initial',
                    priority: 10 
             }
          }
       }
      },
    module: {
        rules: [
        {
            test: /\.css$/,
            use: [ MiniCssExtractPlugin.loader, 'css-loader' ],
            // use: [  'css-loader' ],
            include: srcPath
        },
        {
            test: /\.scss$/,
            use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                'cache-loader',
                'css-loader',
                {
                  loader:'postcss-loader',
                  options:{
                      plugins:[require('autoprefixer')]
                  }
                },
                'sass-loader'
            ]
        },
        {   
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: ['cache-loader',{
              loader: 'babel-loader',
              options: {
                presets:[
                    ['@babel/preset-env',{"useBuiltIns": "usage","corejs": 2,modules: false}]//这里要加[]，要不会报错
                ],
                plugins:["@babel/plugin-transform-runtime",'@babel/plugin-syntax-dynamic-import']
              }
            }]          
        },
        {
          test:/\.vue$/,
          use:['vue-loader']
        },
        
        
    ]
    },
    plugins:pluginsArr
}

console.log(process.env.NODE_ENV)