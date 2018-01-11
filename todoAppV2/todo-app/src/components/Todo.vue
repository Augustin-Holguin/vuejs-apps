<template>
  <div class="todoapp">
    <h1>Todo App</h1><br>
    <input type="text" placeholder="Add a todo" v-model="newTodo" @keyup.enter="addTodo"></input>
    <button @click="addTodo">Add</button>
    <div class="todolist">
      <ul>
        <li v-for="i in todo">
          {{ i }}
          <button class="destroy" @click="destroyTodo">x</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todo: [],
      newTodo: '',
      index: 0
    }
  },
  mounted () {
    this.todo.forEach((newTodo) => {
      this.newTodo.index = i
    })
  },
  methods: {
    addTodo () {
      if (this.newTodo === '') {
        alert('Please enter your todo')
      } else {
      this.todo.push(this.newTodo)
      this.newTodo = ''
      console.log(this.todo.length)
      }
    },
    destroyTodo () {
      this.todo.splice(this.newTodo)
    }
  }
}
</script>

<style>

  .todoapp {
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
  }

  button {
    line-height: 20px;
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
    line-height: 30px;
    margin: 10px;
    width: 300px;
  }

  button.destroy {
    position: absolute;
    right: 12px;
    border: none;
    border-radius: 2px;
    height: 30px;
    width: 30px;
    opacity: 0.8;
    color: #6d6e70;
  }

  button.destroy:hover {
    opacity: 1;
    cursor: pointer;
  }

</style>
