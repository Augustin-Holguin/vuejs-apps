<template>
  <div id="app">
    <div class="sidebar">
      <div class="ui fixed inverted menu">
        <div class="ui container">
          <router-link :to="{name: 'root'}" class="header item">Home</router-link>
          <router-link :to="{name: 'a'}" class="item">Page A</router-link>
          <router-link :to="{name: 'post', params: {id: 1} }" class="item">Article</router-link>
        </div>
      </div>
      <h1>Sidebar</h1>
      <router-view name="sidebar"></router-view>
    </div>
    <div class="main">
      <h1>Main</h1>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default { }
</script>

<style>

</style>
