import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue() // Global Event Bus

new Vue({
  render: h => h(App),
}).$mount('#app')
