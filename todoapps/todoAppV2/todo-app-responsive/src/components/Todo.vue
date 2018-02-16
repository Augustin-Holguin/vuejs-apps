<template>
  <div class="todoapp">

    <div>
      <input type="text" placeholder="Add a todo" v-model="newTodo" @keyup.enter="addTodo"></input>
      <button id="add" @click="addTodo">Add</button>

      <div class="todolist">
        <ul>
          <li v-for="(todo, index) in todos">
            <div class="todoshow">
              {{ todo }}
              <button id="destroy" @click="destroyTodo(index)">&times;</button>
            </div>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      todos: [],
      newTodo: ''
    }
  },
  methods: {
    addTodo () {
      if (this.newTodo === '') {
        alert('Please enter your todo')
      } else {
      this.todos.push(this.newTodo)
      this.newTodo = ''
      }
    },
    destroyTodo (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>

<style>


</style>
