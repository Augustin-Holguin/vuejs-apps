import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'

Vue.config.productionTip = false

Vue.use(VueResource)
Vue.http.options.root ='https://jsonplaceholder.typicode.com'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
