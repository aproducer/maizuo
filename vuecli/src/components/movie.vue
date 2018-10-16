<template>
	<section class="stage">
		<section class="background"></section>
		<section class="wrapper">
			<ul class="topbar">
				<router-link tag='li' to='/movie/now-playing' activeClass='actived'>正在热映</router-link>
				<router-link tag='li' to='/movie/coming-soon' activeClass='actived'>即将上映</router-link>
			</ul>
			<router-view/>
		</section>
	</section>
</template>

<script>
	export default {
		mounted(){
			this.$store.commit('changeTitle','卖座电影');
		}
	}
</script>

<style>
	.background {
		background: #F9F9F9;
	}
	
	.topbar {
		display: flex;
	}
	
	.topbar li {
		width: 50%;
		text-align: center;
		border-bottom: 1px solid #ee762f;
		font-weight: bold;
		height: 48px;
		line-height: 48px;
		box-sizing: border-box;
	}
	
	.topbar li.actived {
		border-bottom: 3px solid #EE762F;
		color: #EE762F;
	}
</style>