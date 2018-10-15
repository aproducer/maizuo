import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
	state:{
		show:false
	},
	mutations:{
		showSidebar(state,data){
			state.show=!state.show;
		}
	}
})
export default store;