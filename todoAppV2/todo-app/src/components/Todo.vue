<template>
  <div class="todoapp">
    <h1>TODO APP</h1><br>
    <input type="text" placeholder="Add a todo" v-model="newTodo" @keyup.enter="addTodo"></input>
    <button @click="addTodo">Add</button>
    <div class="todolist">
      <ul>
        <li v-for="(todo, index) in todos">
          {{ todo }}
          <button class="destroy" @click="destroyTodo(index)">x</button>
        </li>
      </ul>
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

  .todoapp {
    width: 300px;
    text-align: center;
    margin-top: 30px;
    position: absolute;
    left: 50%;
    margin-left: -156px;
    box-sizing: border-box;
  }

  h1 {
    margin-bottom: 5px;
  }

  input {
    line-height: 20px;
    border-radius: 5px;
    margin-left: 10px;
  }

  button {
    min-line-height: 20px;
    width: 40px;
    border-radius: 5px;
    opacity: 0.8;
  }

  button:hover {
    cursor: pointer;
    opacity: 1;
  }

  .todolist {
    margin-top: 20px;
  }

  .todolist li {
    box-sizing: border-box;
    list-style-type: none;
    border: solid 2px #49c0b6;
    border-radius: 5px;
    margin: 10px;
    line-height: 30px;
    width: 300px;
    word-wrap: break-word;
    padding: 0 5px;
  }

  button.destroy {
    position: absolute;
    right: -8px;
    border: none;
    border-radius: 2px;
    height: inherit;
    width: 30px;
    height: 30px;
    opacity: 0.8;
    color: #6d6e70;
  }

  button.destroy:hover {
    opacity: 1;
    cursor: pointer;
  }

</style>
