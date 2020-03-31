<template>
  <div class="login-content">
    <div class="login-bg">
      <div class="login-cont w1200">
        <div class="form-box">
          <form class="layui-form" action="">
            <legend>手机号登录</legend>
            <div class="layui-form-item">
              <div class="layui-inline iphone">
                <div class="layui-input-inline">
                  <i class="layui-icon layui-icon-cellphone iphone-icon"></i>
                  <input type="tel" name="phone" id="phone" lay-verify="required|phone" placeholder="请输入手机号" autocomplete="off" class="layui-input">
                </div>
              </div>
              <div class="layui-inline veri-code">
                <div class="layui-input-inline">
                  <input id="pnum" type="text" name="pnum" lay-verify="required" placeholder="请输入验证码" autocomplete="off" class="layui-input">
                  <input type="button" class="layui-btn" id="find"  value="验证码" />
                </div>
              </div>
            </div>
            <div class="layui-form-item login-btn">
              <div class="layui-input-block">
                  <button class="layui-btn" lay-submit="" lay-filter="demo1" @click="login">登录</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    },

    methods:{
      login:function(){
        console.log('login...')
        this.$router.push({path:'/'})
      }
    }
  }
</script>

<style>
</style>
