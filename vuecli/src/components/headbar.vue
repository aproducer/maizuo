<template>
	<header>
		<section @click="change"><i class="fa fa-bars"></i></section>
		<section>卖座电影</section>
	</header>
</template>

<script>
	export default {
		data: () => {
			return {
			}
		},
		methods: {
			change() {
				this.$store.commit('showSidebar')
			}
		}
	}
</script>

<style scoped>
	header {
		background: #282828;
		position: fixed;
		z-index: 500;
		top: 0;
		right: 0;
		left: 0;
		line-height: 50px;
		vertical-align: top;
	}
	
	section {
		padding: 0 1em;
		float: left;
		font-size: 14px;
		font-weight: bolder;
		color: #efefef;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	section:first-child {
		border-right: 1px solid #222;
		box-shadow: 1px 0 1px #363636;
		color: #999;
	}
</style>