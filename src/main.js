// import Vue from '../node_modules/vue/dist/vue.js';
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

import App from './App.vue'

import router from '../router/router.js'

import '../static/css/main.css'
import '../static/layui/css/layui.css'

var vm = new Vue({
  el: '#app',
  render: h => h(App),
  router
});
