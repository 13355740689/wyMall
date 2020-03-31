// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'


import App from './App'
import router from './router'
import VueRouter from 'vue-router';

import * as filters from './filters' // global filters

// import Header from '@/components/index'
// import Footer from '@/components/footer'
// import Login from '@/components/login'

//注册全局头部、底部组件
// Vue.component('headerVue',Header);
// Vue.component('footerVue',Footer);
// Vue.component('loginVue',Login);

Vue.config.productionTip = false

// 路由守卫
router.beforeEach((to,from,next)=>{
      console.log(to);
      console.log(from);
      next();
        // if(to.matched.some(res=>res.meta.isLogin)){//判断是否需要登录
        //     if (sessionStorage['username']) {
        //         next();
        //     }else{
        //         next({
        //             path:"/login",
        //             query:{
        //                 redirect:to.fullPath
        //             }
        //         });
        //     }

        // }else{
        //     next()
        // }
    });

// //安装插件
// Vue.use(VueRouter);//挂载属性

//创建路由对象并配置路由规则
// let router = new VueRouter({
//     //routes
//     routes: [
//       //一个个link对象
//       {
//           path: '/',
//           components: { // key => value
//               header:Header,
//               footer: Footer
//           }
//       },
//       {
//         path:'/login',
//         name:'login',
//         component:Login
//       }

//   ]
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})
