const resource = require('vue-resource')

const baseURL = 'http://192.168.0.192:8080/'

const service = {
	post:function(url, params){
		console.log('----------resource.js----')
		console.log(params)
		var tmp = {
			data:params
		}
		
		var tmp2 = ''
		console.log(JSON.stringify(tmp))
		resource.Http.headers.common['token'] = '123'
		resource.Http.post(baseURL + url, params).then( res => {
			// console.log(res.body.data.token)
			// console.log(res.data.token)
			tmp2 = res.body.data.token
		})
		console.log(tmp2)
		console.log('resource post')
		
	}
}



module.exports = service