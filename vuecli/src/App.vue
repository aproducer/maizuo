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
	@keyframes allIn{
		from{opacity: 0;}
		to{opacity: 1;}
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
	
	@media only screen and (max-width: 768px) {
		.wrapper-content {
			width: 100%;
		}
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
		min-width: 600px;
	}
	
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	
	.move-enter-active,
	.move-leave-active,
	.fade-enter-active,
	.fade-leave-active {
		transition: all ease 0.4s;
	}
	
	.move-enter,
	.move-leave-to {
		transform: translateX(-100%);
		opacity: 0;
	}
	
	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
</style>