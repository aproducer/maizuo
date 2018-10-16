<template>
	<section class="stage">
		<section class="background"></section>
		<ul>
			<router-link tag='li' to='/card/normalcard' class='card-nav-btn' activeClass='actived'>卖座卡</router-link>
			<router-link tag='li' to='/card/ecard' class='card-nav-btn' activeClass='actived'>电子卖座卡</router-link>
		</ul>
		<router-view/>
	</section>
</template>

<script>
	export default {

	}
</script>

<style scoped="scoped">
	ul {
		position: relative;
		height: 45px;
	}
	
	.background {
		background: #fcfcfc;
	}
	
	.card-nav-btn {
		display: inline-block;
		width: 50%;
		background: #fff;
		font-size: 16px;
		line-height: 45px;
		height: 44px;
		border-bottom: 1px solid #ff7100;
		text-align: center;
		float: left;
	}
	
	.actived {
		border-width: 4px;
		height: 43px;
		color: #ff7100;
	}
</style>