// //引入util里的request方法
// import {
// 	aesc,
// 	Decrypt

// } from '@/api/aesc.js'

var service = require('./resource.js')
var secret = require('./aesc.js')


console.log('secret---------')
console.log(secret)
// console.log(aesc)

module.exports = {
	login(params) { //获取城市
		console.log('api.js....')
		// console.log(secret)
		
		// console.log(service)
		// return post('login', params)
		var tmp = service.post('a/api/goods/login', secret.aesc(params))
		
		
		console.log('解密')
		console.log(secret.Decrypt('NBt/VpPUyr1HK7XN0FgXsBO0/rrT/2nDmRjFQLNr/CoCofKGiold5BSUzNTLX1I0'))
		
		
		return '1111'
	}
}

