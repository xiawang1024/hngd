import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
// import qrcode from '@/components/qrcode'

Vue.use(Router)

export default new Router({
  routes: [
	{
		path:'/',
		redirect:'/home'
	},
    {
		path: '/home',
		name: 'home',
		component: home
    }
  ]
})
