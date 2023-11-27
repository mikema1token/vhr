import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
export default new Vuex.Store({
    state(){
        return {
            router: []
        }
    },
    mutations:{
        updateRouter(state, router){
            state.router = router
        }
    }
})
