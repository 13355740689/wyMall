import Vue from 'vue'
import Router from 'vue-router'

import index from '@/components/index'
import footer from '@/components/footer'
import login from '@/components/login'
import shopcart from '@/components/shopcart'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components:{
          default:index,
          footer:footer
      }
      // components: { // key => value
      //     body:index,
      //     footer:footer
      // }
    },
    {
      path:'/',
      name:'footer',
      component:footer
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/shopcart',
      name:'shopcart',
      component:shopcart
    }
  ]
})
