// //引入util里的request方法
// import {
// 	get,
// 	post,

// } from '../utils/request.js'

var service = require('./resource.js')
var {aesc, Decrypt} = require('./aesc.js')


module.exports = {
	login(params) { //获取城市
		console.log('api.js....')
		console.log(params)
		
		// console.log(service)
		// return post('login', params)
		var tmp = service.post('a/api/goods/login', aesc(params))
		
		
		console.log('解密')
		console.log(Decrypt('NBt/VpPUyr1HK7XN0FgXsBO0/rrT/2nDmRjFQLNr/CoCofKGiold5BSUzNTLX1I0'))
		
		
		return '1111'
	}, 

	postLunbo(params) {
		console.log(params)
		return service.post('a/api/goods/carousel', aesc(params))
	}
}

// const api = {
	
// }

// api.login = function(params){
// 		console.log('..post..')
// 	}

// export default api;
