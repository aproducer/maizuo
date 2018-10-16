<template>
	<nav>
		<transition name='fade'>
			<section v-if="show" class="mask" @click="change"></section>
		</transition>
		<transition name='move'>
			<ul v-if="show" @click="change">
				<router-link tag='li' to='/home'>首页<i class="fa fa-angle-right"></i></router-link>
				<router-link tag='li' to='/movie'>影片<i class="fa fa-angle-right"></i></router-link>
				<router-link tag='li' to='/cinema'>影院<i class="fa fa-angle-right"></i></router-link>
				<router-link tag='li' to='/shop'>商城<i class="fa fa-angle-right"></i></router-link>
				<router-link tag='li' to='/profit'>我的<i class="fa fa-angle-right"></i></router-link>
				<router-link tag='li' to='/card'>卖座卡<i class="fa fa-angle-right"></i></router-link>
			</ul>
		</transition>
	</nav>

</template>

<script>
	export default {
		methods:{
			change(){
				this.$store.commit('showSidebar')
			}
		},
		computed: {
			show() {
				return this.$store.state.show
			}
		}
	}
</script>

<style>
	nav  ul {
		border-top: 1px solid #222;
		box-shadow: 0 1px 1px #363636 inset;
		background: #282828;
		position: fixed;
		display: block;
		top: 50px;
		width: 65%;
		bottom: 0;
		left: 0;
	}
	
	nav li {
		text-align: left;
		line-height: 50px;
		color: #9a9a9a;
		font-size: 14px;
		padding: 0 16px;
		border-bottom: 1px dotted #333;
	}
	nav li>i{
		float: right;
		line-height: 50px !important;
	}
	nav .mask {
		position: fixed;
		top: 50px;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.5);
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