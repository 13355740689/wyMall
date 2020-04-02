// webpack.dev.js
// 存放 dev 配置
const merge = require('webpack-merge');
const common = require('./webpack.base.js');

const path = require('path');
// const webpack = require('webpack')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: { // 开发服务器
    contentBase: '../dist',
	port:3000,
	open:true,
	hot:true
  },
  output: { // 输出
    filename: 'js/[name].[hash].js', // 每次保存 hash 都变化
    path: path.resolve(__dirname, '../dist')
  },
  plugins:[
	// new webpack.HotModuleReplacementPlugin()  
  ],
  module: {},
  mode: 'development',
});
