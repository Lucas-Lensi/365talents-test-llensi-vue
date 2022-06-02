import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    companies: []
  },
  getters: {
    GET_COMPANIES: (state) => {
      return state.companies;
    }
  },
  mutations: {
    SET_COMPANIES: (state, data) => {
      state.companies = data;
    }
  },
  actions: {
    setCompanies(context, companies) {
      context.commit('SET_COMPANIES', companies);
    }
  },
  modules: {
  }
})
