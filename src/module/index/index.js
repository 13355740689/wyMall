// // import Vue from '../node_modules/vue/dist/vue.js';
// import Vue from 'vue'

// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

// import App from 'componets/App.vue'

// import router from '../../router/router.js'

// import '../../assets/css/main.css'
// import '../../assets/layui/css/layui.css'

// import API from '../../utils/api.js'
// Vue.prototype.$api = API

// // Vue.prototype.baseURL = 'http://192.168.0.192:8080/'

// import '../../assets/js/style/quick_links.js';

// // 路由守卫
// router.beforeEach((to,from,next)=>{
//       console.log(to);
//       console.log(from);
//       next();
//     });

// var vm = new Vue({
//   el: '#app',
//   render: h => h(App),
//   router
// });


// import Vue from 'vue'
// import IndexView from './index.vue'
// import router from '../../router/router'

// import VueResource from 'vue-resource';
// Vue.use(VueResource);

// new Vue({
//   el: '#app',
//   router,
//   render: h => h(IndexView)
// });


import main from '@/module/main'
import Index from './index.vue'

main.init(Index)