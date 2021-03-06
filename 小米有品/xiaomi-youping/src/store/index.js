import Vue from 'vue'
import Vuex from 'vuex'
import Address from './address'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    storage:window.sessionStorage
  })],
  modules: {
    Address
  }
})
