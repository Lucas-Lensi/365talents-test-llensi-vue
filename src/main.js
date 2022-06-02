import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

Vue.config.productionTip = false
axios.defaults.baseURL = 'http://localhost:3000/'

new Vue({
	vuetify,
	router,
	store,
	render: h => h(App)
}).$mount('#app')
