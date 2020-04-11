const CryptoJS = require('crypto-js')
// import CryptoJS from 'crypto-js'

	const secret = {
		aesc:function(data){
		 
			// console.log('data:' + data)
			// // console.log(CryptoJS)
			const key = CryptoJS.enc.Utf8.parse("llwl123456789012");  //十六位十六进制数作为密钥
			const iv = CryptoJS.enc.Utf8.parse('llwl123456789012');  
			console.log(JSON.stringify(data)) 
			var tmp = CryptoJS.AES.encrypt(JSON.stringify(data), key, {
					iv:iv,
				mode:CryptoJS.mode.CBC,
				padding:CryptoJS.pad.Pkcs7
			})
			console.log('-------------------')
			console.log(tmp+'')
			var a = 4;
			console.log(a.toString())
			return (tmp+'')
		},

		Decrypt:function(data){
			console.log('开始解密:' + data)
			
			let decrypt= CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse("llwl123456789012"), {
				iv: CryptoJS.enc.Utf8.parse('llwl123456789012'),
				mode: CryptoJS.mode.CBC,
				padding: CryptoJS.pad.Pkcs7
				})
				
				console.log('222222')
				console.log(CryptoJS.enc.Utf8.stringify(decrypt))
			// return decrypt
		}
	};

	module.exports = secret;