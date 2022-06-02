import Vue from 'vue'
import VueRouter from 'vue-router'

import CompanySearch from '../views/CompanySearchView.vue'
import CompanyInformations from '../views/CompanyInformationsView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'companySearch',
    component: CompanySearch
  },
  {
    path: '/:companyName',
    name: 'companyInformations',
    component: CompanyInformations
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
