<template>
  <div>
    <carousel>
      <carousel-slide>
        <div style="position:absolute; left:0; right:0; text-align:center; top: 50%">
          Hello People
        </div>
        <img src="http://lorempicsum.com/futurama/630/300/1">
      </carousel-slide>
      <carousel-slide>
        <div style="position:absolute; left:0; right:0; text-align:center; top: 50%">
          Hello Bots
        </div>
        <img src="http://lorempicsum.com/futurama/630/300/1">
      </carousel-slide>
    </carousel>
    <todos></todos>
  </div>
</template>

<script>
import Todos from './components/Todos'
import Carousel from './components/carousel/Carousel'
import CarouselSlide from './components/carousel/CarouselSlide'

export default {
  components: {
    Todos,
    Carousel,
    CarouselSlide
  }
}
</script>

<style>

</style>
