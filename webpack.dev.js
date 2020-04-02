// webpack.dev.js
// 存放 dev 配置
const merge = require('webpack-merge');
const common = require('./webpack.base.js');

const path = require('path');
// const webpack = require('webpack')

module.exports = merge(common, {
  devtool: 'inline-source-map',  
	
  devServer: { // 开发服务器
    contentBase: path.join(__dirname, '/'),
	port:3000,
	open:true,
	hot:true
  },
  output: { // 输出
	publicPath:'/',
    path: path.join(__dirname, '/'), // 指定 打包好的文件，输出到哪个目录中去
    filename: 'bundle.js' // 这是指定 输出的文件的名称
  },
  plugins:[
	// new webpack.HotModuleReplacementPlugin()  
  ],
  module: {},
  mode: 'development',
});
