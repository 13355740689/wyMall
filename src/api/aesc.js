const CryptoJS = require('crypto-js')

// const key = 'llwl123456789012'
// const iv = 'llwl123456789012'

// const aesc = function(data){
// 	//bL2jeZhf7841w2uI0e9iphYEuf/mpfkKwGZ1bwMlgn+GTJUPlrnaSQwNvDiWKbZ8sQD4DBpFpf2yx6y+G89gLhZyuzNof4Q1cOIOTnmol8wovZy59XIhaYChgdLft1lFKPp+GFpya0l+JIq69qH36zOczc9SgzNVMueaeBod43h42jAss9wYzHgm9EBaWB/4hIJ4fpdZlmKlcpco02z+bXBkXnrdtbLvTS9XsKHHTGjqusJDbA9iajwMdEhWOblEsj3iy6XIC8mjW9IH7HgkE4wGBPE5j0gSe7k0qorhVr/y6RCGlRTc8GLqawo2lg9LVp4F/+kokuy4YxLfN0KSvQ==
// 	console.log('-------------------')
// 	console.log('data:' + data)
// 	console.log(CryptoJS)
// 	const key = CryptoJS.enc.Utf8.parse("llwl123456789012");  //十六位十六进制数作为密钥
// 	const iv = CryptoJS.enc.Utf8.parse('llwl123456789012');   
// 	var tmp = CryptoJS.AES.encrypt(JSON.stringify(data),key,{
// 		iv:iv,
// 		mode:CryptoJS.mode.CBC,
// 		padding:CryptoJS.pad.Pkcs7
// 	}).toString();
// 	console.log(tmp)
// 	return tmp
// }

// const Decrypt = function(data){
// 		console.log('开始解密:' + data)
// 		let decrypt= CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse("llwl123456789012"), {
// 			iv: CryptoJS.enc.Utf8.parse('llwl123456789012'),
// 			mode: CryptoJS.mode.CBC,
// 			padding: CryptoJS.pad.Pkcs7
// 		  })
// 		  console.log(decrypt)
// 		  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
// 		  console.log('222222')
// 		  console.log(decryptedStr.toString())
// 	  return '11111'
// }

// const secret = {
// 	aesc:function(data){
		//bL2jeZhf7841w2uI0e9iphYEuf/mpfkKwGZ1bwMlgn+GTJUPlrnaSQwNvDiWKbZ8sQD4DBpFpf2yx6y+G89gLhZyuzNof4Q1cOIOTnmol8wovZy59XIhaYChgdLft1lFKPp+GFpya0l+JIq69qH36zOczc9SgzNVMueaeBod43h42jAss9wYzHgm9EBaWB/4hIJ4fpdZlmKlcpco02z+bXBkXnrdtbLvTS9XsKHHTGjqusJDbA9iajwMdEhWOblEsj3iy6XIC8mjW9IH7HgkE4wGBPE5j0gSe7k0qorhVr/y6RCGlRTc8GLqawo2lg9LVp4F/+kokuy4YxLfN0KSvQ==
		// console.log('-------------------')
		// console.log('data:' + data)
		// console.log(CryptoJS)
		// const key = CryptoJS.enc.Utf8.parse("llwl123456789012");  //十六位十六进制数作为密钥
		// const iv = CryptoJS.enc.Utf8.parse('llwl123456789012');   
		// var tmp = CryptoJS.AES.encrypt(JSON.stringify(data),key,{
		// 	iv:iv,
		// 	mode:CryptoJS.mode.CBC,
		// 	padding:CryptoJS.pad.Pkcs7
		// }).toString();
		// console.log(tmp)
		// return tmp
	// },

	// Decrypt:function(data){
		// console.log('开始解密:' + data)
		// let decrypt= CryptoJS.AES.decrypt(data, CryptoJS.enc.Utf8.parse("llwl123456789012"), {
		// 	iv: CryptoJS.enc.Utf8.parse('llwl123456789012'),
		// 	mode: CryptoJS.mode.CBC,
		// 	padding: CryptoJS.pad.Pkcs7
		//   })
		//   console.log(decrypt)
		//   let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
		//   console.log('222222')
		//   console.log(decryptedStr.toString())
	//   return '11111'
// }

// }

// export default secret;



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
		// console.log(tmp.toString())
		// var tmp = CryptoJS.AES.encrypt(JSON.stringify(data),key,{
		// 	iv:iv,
		// 	mode:CryptoJS.mode.CBC,
		// 	padding:CryptoJS.pad.Pkcs7
		// }).toString();
		// console.log(tmp)
		return (tmp+'')
		
	},

	Decrypt:function(params){
		console.log(params)
	}
}



module.exports = secret