<template>
	<section class="stage">
		<section class="background"></section>
		<section class="wrapper-content" v-if="film">
			<img :src="film.cover.origin" class="wrapper-content" />
			<section class="film-info">
				<section class="film-word-title">影片简介</section>
				<section class="film-word-row">导&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:&nbsp;{{film.director}}</section>
				<section class="film-word-row">主&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;演:&nbsp;{{actorstr}}</section>
				<section class="film-word-row">地区语言:&nbsp;{{film.nation}}({{film.language}})</section>
				<section class="film-word-row">类&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;型:&nbsp;{{film.category}}</section>
				<section class="film-word-row">上映日期:&nbsp;9月21日上映</section>
				<section class="film-word-textarea">{{film.synopsis}}</section>
			</section>
		</section>
		<section class="film-button wrapper-content">
			<input type="button" name="" id="" value="立即购票" />
		</section>
	</section>
</template>

<script>
	import axios from 'axios'
	export default {
		data: () => {
			return {
				film: null,
				actors: [],
				actorstr: ""
			}
		},
		mounted() {
			axios.get(`v4/api/film/${this.$route.params.id}?__t=1539671791082`).then(reg => {

				this.film = reg.data.data.film;
				this.film.actors.forEach((val) => {
					this.actors.push(val.name);
				});
				this.actorstr = this.actors.join(" | ");
			})
		}
	}
</script>

<style scoped="scoped">
	.background {
		background: #ebebeb;
	}
	
	.film-word-title {
		margin: 16px auto;
		border-left: 16px solid RGB(228, 200, 156);
		font-size: 16px;
		padding-left: 4px;
		text-align: left;
	}
	
	.film-word-row {
		overflow: hidden;
		height: 18px;
		margin-bottom: 10px;
		padding-left: 20px;
		text-align: left;
		font-size: 12px;
	}
	
	.film-word-textarea {
		text-overflow: ellipsis;
		margin-bottom: 80px;
		padding-left: 20px;
		padding-right: 20px;
		text-align: left;
		font-size: 12px;
	}
	
	.film-button {
		width: 100%;
		position: fixed;
		bottom: 20px;
		text-align: center;
	}
	
	.film-button input {
		font-size: 14px;
		min-width: 156px;
		height: 36px;
		line-height: 36px;
		border: none;
		background-color: #fe8233;
		padding: 0;
		margin: 0;
		border-radius: 18px;
		color: #fff;
	}
</style>