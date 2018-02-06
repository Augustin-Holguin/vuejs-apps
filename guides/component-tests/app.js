Vue.component('child', {
  // camelCase in JavaScript
  props: ['myMessage'],
  template: '<span>{{ myMessage }}</span>'
})

new Vue ({
  el: '#app',
  data: {
  },
  components: { 'child' }
})
