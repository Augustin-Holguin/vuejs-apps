import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter ({
  mode: 'history',
  routes: [{
    path: '/',
    component: require('./components/HelloWorld.vue').default,
    name: 'root'
  }, {
    path: '/a',
    component: require('./components/PageA.vue').default,
    name: 'a',
    children: [{
      path: '/b',
      component: require('./components/PageB.vue').default,
      name: 'a.b'
    }, {
      path: '/c',
      component: require('./components/PageC.vue').default,
      name: 'a.c'
    }, {
      path: '/d',
      component: require('./components/PageD.vue').default,
      name: 'a.d'
    }]
  }, {
    path: '/article/:id(\\d+)',
    components: require('./components/PageA.vue').default,
    name: 'post'
  }, {
    path: '*',
    redirect: '/'
  }]
})

import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(require('./App.vue').default)
})
