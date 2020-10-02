import Vue from 'vue'
import Vuex from 'vuex'
import {createVuexStore} from 'vuex-simple'
import SheduleStore from './store'

Vue.use(Vuex)

const instance = new SheduleStore()

export default createVuexStore(instance, {
    strict: false,
    modules: {},
    plugins: []
})