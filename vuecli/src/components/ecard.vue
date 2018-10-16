<template>
	<section class="wrapper">
		<label for="card">卡号:</label>
		<input type="text" name="" id="card" value="" placeholder="请输入电子卖座卡号" />
		<section class="input-bar"></section>
		<button>查询</button>
	</section>
</template>

<script>
	export default {

	}
</script>

<style scoped="scoped">
	.wrapper {
		top: 30px;
		width: 94%;
		text-align: left;
	}
	
	.wrapper input {
		position: relative;
		display: inline-block;
		background-color: #FCFCFC;
		font-size: 14px;
		padding: 6px 12px;
		border: none;
	}
	
	label {
		margin: 0 10px;
		font-size: 14px;
		color: #333;
	}
	
	.input-bar {
		position: relative;
		height: 5px;
		top: -3px;
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