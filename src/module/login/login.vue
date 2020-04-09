<template>
  <div class="login-content">
    <div class="login-bg">
      <div class="login-cont w1200">
        <div class="form-box">
          <!-- <form class="layui-form" action=""> -->
            <legend>账号登录</legend>
            <div class="layui-form-item">
              <div class="layui-inline iphone">
                <div class="layui-input-inline">
                  <i class="layui-icon layui-icon-username iphone-icon"></i>
                  <input type="tel" v-model="username" lay-verify="required|phone" placeholder="请输入账号" autocomplete="off" class="layui-input">
                </div>
              </div>
              <div class="layui-inline iphone">
                <div class="layui-input-inline">
                  <i class="layui-icon layui-icon-password iphone-icon"></i>
                  <input type="tel" v-model="password" lay-verify="required|password" placeholder="请输入密码" autocomplete="off" class="layui-input">
                </div>
              </div>
            </div>
            <div class="layui-form-item">
              <div class="layui-input-block">
                  <button class="layui-btn"  lay-filter="demo1" @click="login">登录</button>
              </div>
            </div>
          <!-- </form> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
	const CryptoJS = require('crypto-js')
	
  export default {
    data(){
      return {
        username:'',
        password:''
      }
    },
	created() {
		console.log('login created...')
		console.log(this.$api)
	},
	
	mounted() {
		
		// console.log(that.$api)
	},
	
	// onShow: () => {
	// 	console.log(this.$api)
	// },

    methods:{
      login:function(){
        console.log('login...')
		console.log()
        console.log(this.$api)
        console.log(this.username);
        console.log(this.password);
        
        const key = CryptoJS.enc.Utf8.parse("llwl123456789012");  //十六位十六进制数作为密钥
        const iv = CryptoJS.enc.Utf8.parse('llwl123456789012'); 
          console.log(key)
          console.log(iv)
        // var tmp=window.CryptoJS.AES.encrypt(JSON.stringify(data),key,{
        // 	iv:iv,
        // 	mode:window.CryptoJS.mode.CBC,
        // 	padding:window.CryptoJS.pad.Pkcs7
        // }).toString();
        
        // this.$api.login({username:this.username,
        //   password:this.password
        // });
        //this.$router.push({path:'/'})
		console.log(this.$api.login({account:this.username, pwd:this.password}))
      }
    }
  }
</script>


<style>
</style>
