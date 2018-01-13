<template>
  <div class="todoapp">

    <div class="todoForm">
      <input type="text" placeholder="Add a todo" v-model="newTodo" @keyup.enter="addTodo"></input>
      <button @click="addTodo">Add</button>

      <div class="todolist">
        <ul>
          <li v-for="(todo, index) in todos">
            <div class="todoshow">{{ todo }}</div>
            <button id="destroy" @click="destroyTodo(index)">x</button>
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

  .todoForm {
    width: 330px;
    overflow: auto;
  }

  input {
    line-height: 25px;
    border-radius: 5px;
    padding-left: 4px;
  }

  button {
    line-height: 25px;
    width: 40px;
    border-radius: 5px;
    opacity: 0.8;
  }

  button:hover {
    cursor: pointer;
    opacity: 1;
  }

  .todolist li {
    list-style-type: none;
    line-height: 20px;
    margin-top: 30px;
  }

  .todoshow {
    border: solid 2px #49c0b6;
    border-radius: 5px;
    padding: 5px 5px;
    word-wrap:break-word;
  }

  .todolist button#destroy {
    float: right;
    line-height: 20px;
    width: 30px;
    border: none;
    border-radius: 2px;
    opacity: 0.8;
    color: #6d6e70;
  }

  button#destroy:hover {
    opacity: 1;
    cursor: pointer;
  }

</style>
