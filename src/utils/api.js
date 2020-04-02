// //引入util里的request方法
// import {
// 	get,
// 	post,

// } from '../utils/request.js'
var {post, get} = require('../utils/request.js')

module.exports = {
  //登录接口
  login:function(param){
    return post('a/api/login', param)
  },
  
	post:function(params) { //获取城市
		return post('login', params)
	}
}
