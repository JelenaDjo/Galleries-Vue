import Vue from 'vue'
import App from './App.vue'
import Router from './Router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  router: Router,

  render: h => h(App),
}).$mount('#app')
