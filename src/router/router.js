
// import VueRouter from 'vue-router'
// // import store from '@/store'


// import index from '../module/index/index.vue'
// import login from '../module/login/login.vue'
// // import login from '../components/login.vue'
// // import shopcart from '../components/shopcart.vue'
// // import footer from '../components/footer.vue'

// Vue.use(VueRouter)

// var router = new VueRouter({
// 	mode: 'history',
// 	linkActiveClass:'',
// 	routes:[
// 		{
// 			path: '/',
// 			redirect:'/index'
// 		},
// 		{
// 			path: '/index',
// 			name: 'index',
// 			component: r => require.ensure([], () => r(require('@/module/index/index')), 'index.index')
// 			// component: () => import ('../module/index/index.vue')
// 			// component:index
// 			// components:{
// 			//     default:index,
// 			//     footer:footer
// 			// }
// 		},
		
// 		{
// 			path:'/login', 
// 			name:'login',
// 			component: r => require.ensure([], () => r(require('@/module/login/login')), 'login.login')
// 			// component: () => import ('../module/login/login.vue')
// 		},
// 		// {path:'/shopcart', component:shopcart}
// 	]
// })

// // 路由守卫
// router.beforeEach((to,from,next)=>{
// 	console.log('-----------to------------')
// 	console.log(to);
// 	console.log('-----------from------------')
// 	console.log(from);
// 	next();
//   });

// export default router


export default [
    {
        path: '/my',
        component: r => require.ensure([], () => r(require('@/module/index/index')), 'index.index')
    },
    {
        path: '/product/detail',
        component: r => require.ensure([], () => r(require('@/module/login/login')), 'login.login')
    }
]


