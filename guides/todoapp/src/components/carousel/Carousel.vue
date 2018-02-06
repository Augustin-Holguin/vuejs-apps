<template>
  <div class="carousel">
    <slot></slot>
    <button class="carousel__nav carousel__prev" @click.prevent="prev"><</button>
    <button class="carousel__nav carousel__next" @click.prevent="next">></button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      slides: []
    }
  },
  mounted () {
    this.slides = this.$children
    this.slides.forEach((slide, i) => {
      slide.index = i
    })
  },
  computed: {
    slidesCount () { return this.slides.length }
  },
  methods: {
    next () {
      this.index++
      if (this.index >= this.slidesCount) {
        this.index = 0
      }
    },
    prev () {
      this.index--
      if(this.index < 0) {
        this.index = this.slidesCount - 1
      }
    }
  }
}
</script>

<style>
.carousel {
  position: relative;
}

.carousel__nav {
  position: absolute;
  top: 50%;
  right: -60px;
  width: 50px;
  background: pink;
  height: 50px;
  border-radius: 50%;
  font-size: 2em;
  cursor: pointer;
}

.carousel__nav.carousel__prev {
  left: 20px;
  right: auto;
}
</style>
