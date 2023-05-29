import Vue from 'vue'
import Vuex from 'vuex'
import tab from './tab'

Vue.use(Vuex)

//创建Vuex实例并暴露，store
export default new Vuex.Store({
    modules:{
        tab
    }
})