<template>
  <div class="counter">
    {{ count }}
    <div class="counter__button" @click="increment">Increment</div>
  </div>
</template>


<script>
  import store from './store/NotificationsStore'

  export default {
    data () {
      return {
        state: store.state
      }
    },
    computed: {
      count: function () { return this.state.count }
    },
    methods: {
      increment () {
        store.increment()
      }
    }
  }

</script>
