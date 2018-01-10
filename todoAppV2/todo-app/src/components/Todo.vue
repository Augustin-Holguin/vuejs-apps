<template>
  <div class="todoapp">
    <h1>Todo App</h1><br>
    <input type="text" v-model="newTodo" @keyup.enter="addTodo"></input>
    <button @click="addTodo">Add</button>
    <ul>
      <li v-for="i in todo">{{ i }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todo: ['hello', 'aujus'],
      newTodo: ''
    }
  },
  methods: {
    addTodo () {
      console.log('Workin')
    }
  }
}
</script>

<style>

  .todoapp {
    text-align: center;
    margin-top: 30px;
  }

  h1 {
    margin-bottom: 5px;
  }

  input {
    line-height: 20px;
    border-radius: 5px;
  }

  button {
    line-height: 20px;
    width: 40px;
    border-radius: 5px;
    margin-left: 5px;
  }

</style>
