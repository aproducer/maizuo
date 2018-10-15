<template>
	<div id="app">
		<headbar/>
		<leftbar/>
		<router-view/>
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
			headbar,leftbar
		}
	}
</script>

<style>
	* {
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
	i{
		display: inline !important;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
</style>