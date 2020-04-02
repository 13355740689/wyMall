// webpack.base.js
// 存放 dev 和 prod 通用配置
const webpack = require('webpack');
// vue-loader 插件
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// html插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: path.join(__dirname, './src/main.js'), //入口
  module: { //这个节点用于配置所有第三方模块加载器
    rules: [
		{
			test: /(\.jsx|\.js)$/,   
			use: {                    // 注意use选择如果有多项配置，可写成这种对象形式
				loader: "babel-loader"
			},
			exclude: /node_modules/   // 排除匹配node_modules模块 配置处理js文件的第三方Loader
		},
		{
			test:/\.css$/,
			loader:['style-loader', 'css-loader']  //配置处理.css文件的第三方Loader
		},
		{
		  test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
		  loader: 'url-loader',
		  options: {
		    limit: 10000
		  }
		},
		{
		  test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
		  loader: 'url-loader',
		  options: {
		    limit: 10000
		  }
		},
		{
		  test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
		  loader: 'url-loader',
		  options: {
		    limit: 10000
		  }
		},
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
      template: path.resolve(__dirname, './index.html'),
    })
	// new webpack.ProvidePlugin({
	// 	$:"jquery",
	// 	jQuery:"jquery",
	// 	"window.jquery":"jquery"
	// })
  ],// 插件
  resolve:{
	  alias:{ //修改vue包被导入时的路径
		  "vue$":"vue/dist/vue.js"
	  }
  }
};
