import CryptoJS from 'crypto-js'

/**
 * CryptoJS加密
 */
var getAES = function(data){ //加密
    var key  = 'llwl123456789012';  //密钥
    var iv   = 'llwl123456789012';
    var encrypted = getAesString(data,key,iv); //密文
    var encrypted1 = CryptoJS.enc.Utf8.parse(encrypted);
    return encrypted;
}

/**
 * CryptoJS解密
 */
var getDAes = function(data){//解密
    var key  = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';  //密钥
    var iv   = '1234567812345678';
    var decryptedStr = getDAesString(data,key,iv);
    return decryptedStr;
}


// var Encryption = Encryption || function (plaintText){
// 		 const key = CryptoJS.enc.Utf8.parse("llwl123456789012");  //十六位十六进制数作为密钥
// 		 const iv = CryptoJS.enc.Utf8.parse('llwl123456789012');   
		
// 		let srcs = CryptoJS.enc.Utf8.parse(plaintText);
// 		let encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
// 		return encrypted.ciphertext.toString().toUpperCase();
// }

