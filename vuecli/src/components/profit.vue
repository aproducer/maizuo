<template>
	<section class="stage">
		<section class="background"></section>
		<section class="wrapper">
			<input type="text" name="" id="" value="" placeholder="输入手机号" />
			<section class="input-bar"></section>
			<br />
			<input type="text" name="" id="" value="" placeholder="输入验证码" />
			<section class="input-bar"></section>
			<button>登录</button>
		</section>
	</section>
</template>

<script>
	export default {
		mounted(){
			this.$store.commit('changeTitle','登录');
		}
	}
</script>

<style scoped="scoped">
	.background {
		background-color: #f6f6f6;
	}
	
	.wrapper {
		top: 30px;
		width: 94%;
	}
	
	.wrapper input {
		position: relative;
		display: block;
		background-color: #f6f6f6;
		font-size: 14px;
		padding: 6px 12px;
		border: none;
	}
	
	.input-bar {
		position: relative;
		height: 12px;
		top: -12px;
		border: solid #c4c4c4;
		border-width: 0 1px 1px 1px;
	}
	
	button {
		display: block;
		width: 163px;
		background-color: #fe8233;
		color: #fff;
		border: none;
		border-radius: 36px;
		margin: 45px auto;
		padding: 8px 12px;
		font-size: 15px;
	}
</style>