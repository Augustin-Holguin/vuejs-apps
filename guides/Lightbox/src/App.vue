<template>
  <div id="app">
    <div v-if="title =='simpsons'">
      <a :href="'http://lorempicsum.com/simpsons/800/600/' + n" v-lightbox v-for="n in 9">
        <img :src="'http://lorempicsum.com/simpsons/150/150/' + n">
      </a>
    </div>
    <section>
      <div v-if="title=='rio'">
        <a :href="'http://lorempicsum.com/rio/800/600/' + n" v-lightbox v-for="n in 9">
          <img :src="'http://lorempicsum.com/rio/150/150/' + n">
        </a>
      </div>
    </section>
    <button @click="title = 'rio'">Rio</button>
    <button @click="title = 'simpsons'">Simpsons</button>
    <lightbox></lightbox>
  </div>
</template>

<script>
import Lightbox from './components/lightbox/Lightbox.vue'

export default {
  data () {
    return {
      title: 'simpsons'
    }
  },
  name: 'App',
  components: {
    Lightbox
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
