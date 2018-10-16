<template>
	<section class="stage">
		<section class="background"></section>
		<ul class="district-list">
			<li v-for="district of districts">
				<div class="district" @click="aaa(district)">{{district}}</div>
				<ul v-show="cinemas[district].show">
					<li class="cinema" v-for="cinema of cinemas[district]">
						<p class="cinema-name">{{cinema.name}}</p>
						<p class="cinema-info">{{cinema.address}}</p>
						<p class="cinema-info">距离未知</p>
					</li>
				</ul>
			</li>
		</ul>
	</section>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	export default {
		data: () => {
			return {
				cinemas: {},
				districts: []
			}
		},
		methods: {
			aaa(str) {
				console.log(str, this.cinemas[str].show);
				this.cinemas[str].show = !this.cinemas[str].show;
			}
		},
		mounted() {
			axios.get('/v4/api/cinema?__t=1539658208539').then(reg => {
				console.log(reg.data);
				reg.data.data.cinemas.forEach((cinema) => {
					console.log(this.cinemas.hasOwnProperty(cinema.district.name))
					if(!this.cinemas.hasOwnProperty(cinema.district.name,this.cinemas)) {
						this.$set(this.cinemas,cinema.district.name,[])
						this.$set(this.cinemas[cinema.district.name],'show',false);
					}
					this.cinemas[cinema.district.name].push(cinema);
					
				});
				this.districts = Object.keys(this.cinemas);
				console.log(this.cinemas, this.districts);
			});
		}
	}
</script>

<style scoped="scoped">
	.stage {
		text-align: left;
	}
	
	.background {
		background-color: #ebebeb;
	}
	
	.district-list {
		position: relative;
	}
	
	.district {
		display: block;
		background: #e1e1e1;
		margin-bottom: 2px;
		color: #636363;
		padding-left: 16px;
		height: 40px;
		line-height: 40px;
	}
	
	.cinema {
		padding: 10px 0 12px 16px;
		margin-bottom: 2px;
		background-color: white;
	}
	
	.cinema-name {
		line-height: 30px;
		color: #000;
		font-size: 16px;
	}
	
	.cinema-info {
		line-height: 18px;
		color: #ccc;
		font-size: 12px;
	}
</style>