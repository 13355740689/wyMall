// // import '@/assets/style/common.css'
// // import 'babel-polyfill'

// import Vue from 'vue'
// // import VueRouter from 'vue-router'
// // // import config from '@/common/config'
// import routes from '@/router/router'
// // // import store from '@/store'
// import App from './App.vue'

// Vue.config.productionTip = false




// // new Vue({
// //   el: '#app',
// //   routes,
// //   render: h => h(App)
// // })

// export default {
//   init(component) {
//     routes.push({
//       path: location.pathname,
//       component
//     })

//     const router = new VueRouter({
//         mode: 'history',
//         routes
//     })

//     new Vue({
//         router,
//         store,
//         template: '<App/>',
//         components: {App},
//         created(){
//           if(router.mode === 'hash' && !location.hash) {
//             this.$router.push(location.pathname)
//           }
//         }
//     }).$mount('#app')
//   }
// }

import '@/assets/layui/css/layui.css'
import '@/assets/css/main.css'
import 'babel-polyfill'

import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '@/router/router'

import App from './App.vue'


import $ from 'jquery'

import '../common/common.js'


Vue.config.productionTip = false

import API from '@/api/api.js';
Vue.prototype.$api = API //全局引用api.js

Vue.use(VueRouter)

export default {
  init(component) {
    routes.push({
      path: location.pathname,
      component
    })

    const router = new VueRouter({
        mode: 'history',
        routes
    })

    new Vue({
        router,
        template: '<App/>',
        components: {App},
        created(){
          if(router.mode === 'hash' && !location.hash) {
            this.$router.push(location.pathname)
          }
        }
    }).$mount('#app')
  }
}

