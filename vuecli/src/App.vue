<template>
	<div id="app">
		<headbar/>
		<router-view/>

		<leftbar/>
		<!--<img src="./assets/logo.png">
    <router-view/>-->
	</div>
</template>

<script>
	import headbar from './components/headbar'
	import leftbar from './components/leftbar'
	export default {
		name: 'App',
		components: {
			headbar,
			leftbar
		}
	}
</script>

<style>
	i {
		display: inline !important;
	}
	
	* {
		margin: 0;
		padding: 0;
		outline: none;
		box-sizing: border-box;
		animation: allIn .5s ease;
		transition: all 0.2s ease;
		left: 0;
		right: 0;
	}
	
	ul li {
		list-style: none;
	}
	
	.wrapper {
		position: relative;
		width: 95%;
		margin: 0 auto;
	}
	
	.wrapper-content {
		position: relative;
		width: 600px;
		text-align: center;
		margin: 0 auto;
	}
	
	.background {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
	}
	
	.stage {
		padding-top: 50px;
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>