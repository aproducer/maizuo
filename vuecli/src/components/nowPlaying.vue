<template>
	<ul>
		<li v-for="film of films" class="np-items" @click="change(film.id)">
			<section class="film-img">
				<img :src="film.poster.origin" />
			</section>
			<section class="np-info">
				<section class="film-name">
					{{film.name}}
					<div class="film-grade">
						{{film.grade}}
						<i class="fa fa-angle-right"></i>
					</div>
				</section>
				<section class="film-intro">
					{{film.intro}}
				</section>
				<section class="film-count">
					<span class="film-count-num">{{film.cinemaCount}}</span>家影院上映&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="film-count-num">{{film.watchCount}}</span>人购票
				</section>
			</section>
		</li>
	</ul>
</template>

<script>
	import axios from 'axios'
	import router from '../router'
	export default {
		data: () => {
			return {
				films: null
			}
		},
		methods: {
			change(id){
				router.push(`/${id}`)
			}
		},
		mounted() {
			axios.get('v4/api/film/now-playing?page=1&count=7').then(reg => {
				this.films = reg.data.data.films;
				console.log(this.films)
			})
		}
	}
</script>

<style scoped="scoped">
	.np-items {
		height: 125px;
		padding: 20px 0px;
		border-bottom: 1px dotted rgb(201, 201, 201);
		text-align: left;
	}
	
	.film-img {
		height: 100%;
		width: 60px;
		position: relative;
		display: inline-block;
		overflow: hidden;
	}
	
	.film-img img {
		width: 100%;
		position: absolute;
	}
	
	.np-info {
		text-align: left;
		padding-left: 15px;
		display: inline-block;
		width: 75%;
		vertical-align: top;
	}
	
	.film-name {
		font-size: 16px;
		line-height: 32px;
		color: #000;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.film-intro {
		height: 24px;
		line-height: 24px;
		color: #8e8e8e;
		font-size: 12px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width: 100%;
		display: inline-block;
	}
	
	.film-count {
		line-height: 24px;
		color: #8e8e8e;
		font-size: 12px;
	}
	
	.film-grade {
		float: right;
		font-size: 16px;
		font-weight: bolder;
		line-height: 32px;
		color: #fc7103;
	}
	
	.film-grade i {
		color: #c6c6c6;
		line-height: 32px;
	}
	
	.film-count-num {
		color: #8aa2bf;
	}
</style>