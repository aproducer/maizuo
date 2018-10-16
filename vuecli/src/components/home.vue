<template>
	<section class="stage">
		<section class="background"></section>
		<mt-swipe :show-indicators="false" :continuous='true' class='swipe'>
			<mt-swipe-item class='swipe-item' v-for='item of billboards'><img :src="item.imageUrl" /></mt-swipe-item>
		</mt-swipe>

		<ul class="film-list">
			<li class="film-list-item" v-for="film of nowPlaying" @click="change(film.id)">
				<div class="film-list-img">
					<img :src="film.cover.origin" />
				</div>
				<section class="film-list-info">
					<div class="film-info-score">{{film.grade}}</div>
					<span>{{film.name}}<br /></span>
					<span>{{film.cinemaCount}}家影院上映&nbsp;&nbsp;{{film.watchCount}}人购票</span>
				</section>
			</li>
			<div class="more-btn">更多热映电影</div>
			<div class="bar"></div>
			<div class="coming-btn">即将上映</div>
			<br /><br />
			<li class="film-list-item coming-item" v-for="film of comingSoon" @click="change(film.id)">
				<div class="film-list-img">
					<img :src="film.cover.origin" />
				</div>
				<section class="film-list-info">
					<span>{{film.name}}</span>
					<span class="film-date">9月30日上映</span>
				</section>
			</li>
			<div class="more-btn">更多即将上映电影</div>
		</ul>
	</section>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	import axios from 'axios';
	import router from '../router';
	export default {
		data: () => {
			return {
				billboards: null,
				nowPlaying: null,
				comingSoon: null
			}
		},
		methods: {
			change(id) {
				router.push(`/${id}`)
			}
		},
		components: {
			Swipe,
			SwipeItem
		},
		mounted() {
			axios.get('/v4/api/billboard/home?__t=1539603071184').then(reg => {
				this.billboards = reg.data.data.billboards;
			});
			axios.get('/v4/api/film/now-playing?__t=1539607334563&page=1&count=5').then(reg => {
				this.nowPlaying = reg.data.data.films;
			});
			axios.get('/v4/api/film/coming-soon?__t=1539615217560&page=1&count=3').then(reg => {
				this.comingSoon = reg.data.data.films;
			});
		}
	}
</script>

<style scoped>
	.background {
		background: #ebebeb;
	}
	
	.swipe {
		width: 600px;
		min-width: 600px;
		margin: 0 auto;
	}
	
	.swipe-item>img {
		width: 100%;
		vertical-align: middle;
	}
	
	.film-list {
		padding: 18px 17px 0;
		min-width: 600px;
	}
	
	.film-list-item {
		width: 566px;
		height: 368px;
		margin: 0 auto;
		margin-bottom: 17px;
		background-color: #f9f9f9;
		box-shadow: 0.5px 0.5px 1px #a8a8a8;
		cursor: pointer;
	}
	
	@media only screen and (max-width: 768px) {
		li {
			width: 100%;
		}
		.swipe {
			width: 100%;
		}
	}
	
	.film-list-img {
		height: 318px;
		background-color: #444;
		overflow: hidden;
	}
	
	.film-list-img img {
		width: 100%;
	}
	
	.film-list-info {
		font-size: 12px;
		line-height: 15px;
		padding: 13px;
		text-align: left;
	}
	
	.film-list-info>span:nth-child(3) {
		font-size: 8px;
		color: #9a9a9a;
	}
	
	.film-info-score {
		color: #f78360;
		line-height: 50px;
		float: right;
		margin-right: 15px;
		margin-top: -15px;
		font-size: 18px;
	}
	
	.more-btn {
		width: 160px;
		height: 30px;
		border: 1px solid #aaa;
		border-radius: 15px;
		margin: 10px auto 30px;
		text-align: center;
		line-height: 30px;
		font-size: 12px;
		color: #616161;
		cursor: pointer;
	}
	
	.coming-btn {
		position: relative;
		width: 65px;
		height: 20px;
		margin: 0 auto;
		margin-bottom: -10px;
		border-radius: 5px;
		font-size: 10px;
		line-height: 20px;
		text-align: center;
		color: #eee;
		background-color: #a7a7a7;
	}
	
	.bar {
		position: absolute;
		width: 100%;
		height: 10px;
		border-bottom: 1px solid #a8a8a8;
	}
	
	.film-date {
		float: right;
		width: 205px;
		font-size: 10px;
		color: RGB(245, 162, 125);
		line-height: 15px;
	}
	
	.coming-item {
		height: 358px;
	}
	
	.wrapper-content {
		overflow: hidden;
	}
</style>