<template>
  <div>
      <todo></todo>
    <footer>
        Made with mucho love by Gus
    </footer>
  </div>
</template>

<script>
import Todo from './components/Todo'

export default {
  components: {
    Todo
  }
}
</script>

<style>
 * {
   margin: 0;
   padding: 0;
   font-family: arial;
 }

 body {
   min-height: 100%;
 }

 footer {
   position: fixed;
   left: 0;
   right: 0;
   bottom: 0;
   line-height: 35px;
   background-color: #f0f0f0;
   text-align: center;
   color: #49c0b6;
   border-top: solid 1.5px #e0e0e0;
   font-weight: bold;
 }
</style>
