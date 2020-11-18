import Vue from 'vue'
import Vuex from 'vuex'
import Program from './program'
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
    Program
  }
})
