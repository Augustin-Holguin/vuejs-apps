<template lang="html">
  <div>
    <h1>Page A</h1>
    <ul>
      <router-link :to="{ name: 'a.b' }">View B</router-link>
      <router-link :to="{ name: 'a.c' }">View C</router-link>
      <router-link :to="{ name: 'a.d' }">View D</router-link>
    </ul>
    <h1>Sub views</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
