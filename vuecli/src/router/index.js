import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import movie from '@/components/movie'
import nowPlaying from '@/components/nowPlaying'
import comingSoon from '@/components/comingSoon'
import cinema from '@/components/cinema'
import profit from '@/components/profit'

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			redirect: '/home'
		},
		{
			path: '/home',
			component: home
		},
		{
			path: '/movie',
			component: movie,
			children: [{
				path:'',
				redirect:'now-playing'
			},{
				path:'now-playing',
				component:nowPlaying
			},{
				path:'coming-soon',
				component:comingSoon
			}]
		},
		{
			path: '/cinema',
			component: cinema
		},
		{
			path: '/shop',
			component: home
		},
		{
			path: '/profit',
			component: profit
		},
		{
			path: '/card',
			component: home
		}
	]
})