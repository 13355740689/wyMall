import VueRouter from 'vue-router'

import index from '../src/components/index.vue'
import shopcart from '../src/components/shopcart.vue'
import footer from '../src/components/footer.vue'

var router = new VueRouter({
	routes:[
		{
			path: '/',
			name: 'index',
			components:{
			    default:index,
			    footer:footer
			}
		},
		
		{path:'/index', component:index},
		{path:'/shopcart', component:shopcart},
		{path:'/footer', component:footer}
	]
})

export default router


