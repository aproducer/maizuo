import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/components/home'
import movie from '@/components/movie'
import nowPlaying from '@/components/nowPlaying'
import comingSoon from '@/components/comingSoon'
import cinema from '@/components/cinema'
import profit from '@/components/profit'
import card from '@/components/card'
import ecard from '@/components/ecard'
import normalcard from '@/components/normalcard'
import detail from '@/components/detail'

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
				path: '',
				redirect: 'now-playing'
			}, {
				path: 'now-playing',
				component: nowPlaying
			}, {
				path: 'coming-soon',
				component: comingSoon
			}]
		},
		{
			path: '/cinema',
			component: cinema
		},
		{
			path: '/profit',
			component: profit
		},
		{
			path: '/card',
			component: card,
			children: [{
				path: '',
				redirect: 'normalcard'
			}, {
				path: 'ecard',
				component: ecard
			}, {
				path: 'normalcard',
				component: normalcard
			}]
		}, 
		{
			path: '/:id',
			component: detail
		}
	]
})