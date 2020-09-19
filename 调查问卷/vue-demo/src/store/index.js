import Vue from 'vue'
import Vuex from 'vuex'
import Problem from './problem'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Problem
  }
})
