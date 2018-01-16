<template>
  <div>
    <category></category>
    <footer>
        Made with mucho love by Gus
    </footer>
  </div>
</template>

<script>
import Todo from './components/Todo'
import Category from './components/Category'

export default {
  components: {
    Category,
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
   margin-top: -20px;
 }

 footer {
   position: fixed;
   width: 100%;
   bottom: 0;
   line-height: 35px;
   background-color: #f0f0f0;
   text-align: center;
   color: #008374;
   border-top: solid 1.5px #e0e0e0;
   font-weight: bold;
 }
</style>
