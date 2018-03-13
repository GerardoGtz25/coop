// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store.js'
import axios from 'axios'

Vue.config.productionTip = false

window.axios = axios.create({
  baseURL: 'http://coop.api.netlor.fr/api/',
  params : {
  	token : store.state.token
  },
  headers: { Authorization: 'Token token=0a2d2062c765481a9cfb6f8d28e0b2b7' }
});

store.subscribe((mutation, state) => {
	localStorage.setItem('store', JSON.stringify(state));
});

window.bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  beforeCreate() {
  	this.$store.commit('initialiseStore');
},
  components: { App },
  template: '<App/>'
})
