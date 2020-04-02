// webpack.base.js
// 存放 dev 和 prod 通用配置
const webpack = require('webpack');
// vue-loader 插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/main.js', //入口
  module: {
    rules: [
	{
        test: /\.vue$/,
        loader: 'vue-loader'
      }]
  },
  plugins: [
    // 解决vender后面的hash每次都改变
    new webpack.HashedModuleIdsPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
    }),
  ],// 插件
  resolve:{
	  alias:{ //修改vue包被导入时的路径
		  "vue$":"vue/dist/vue.js"
	  }
  }
};
