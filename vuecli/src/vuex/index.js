import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
	state:{
		show:false,
		title:''
	},
	mutations:{
		showSidebar(state,data){
			state.show=!state.show;
		},
		changeTitle(state,data){
			state.title=data;
		}
	}
})
export default store;