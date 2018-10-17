<template>
	<ul v-infinite-scroll='loadMore'>
		<li v-for="film of films" class="np-items" @click="change(film.id)">
			<section class="film-img">
				<img :src="film.poster.origin" />
			</section>
			<section class="np-info">
				<section class="film-name">
					{{film.name}}
				</section>
				<section class="film-intro">
					{{film.intro}}
				</section>
				<section class="film-count">
					10月19日上映&nbsp;&nbsp;&nbsp;&nbsp;星期五
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
				films: [],
				index: 1
			}
		},
		methods: {
			change(id) {
				router.push(`/${id}`)
			},
			loadMore() {
				this.loading = true;
				new Promise((res) => {
					this.getData(res)
				}).then(() => {
					this.loading = false;
					console.log(this.loading);
				});
			},
			getData(fun) {
				axios.get(`v4/api/film/coming-soon?page=${this.index++}&count=7`).then(reg => {
					this.films = this.films.concat(reg.data.data.films);
					console.log(this.films);
					fun && fun();
				})
			}
		},
		mounted() {
			this.getData();
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
		color: #ffb375;
		font-size: 12px;
		font-weight: bold;
	}
	
	.film-grade {
		float: right;
		font-size: 16px;
		line-height: 32px;
		color: #fc7103;
	}
</style>