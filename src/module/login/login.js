// import Vue from 'vue'
// import LoginView from './login.vue'
// import router from '../../router/router'

// // import VueResource from 'vue-resource';
// // Vue.use(VueResource);

// new Vue({
//   el: '#login',
//   router,
//   render: h => h(LoginView)
// })


import main from '@/module/main'
import Login from './login.vue'

main.init(Login)