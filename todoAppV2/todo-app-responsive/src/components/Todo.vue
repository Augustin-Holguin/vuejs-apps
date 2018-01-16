<template>
  <div class="todoapp">

    <div class="todoForm">
      <input type="text" placeholder="Add a todo" v-model="newTodo" @keyup.enter="addTodo"></input>
      <button id="add" @click="addTodo">Add</button>

      <div class="todolist">
        <ul>
          <li v-for="(todo, index) in todos">
            <div class="todoshow">{{ todo }}</div>
            <button id="destroy" @click="destroyTodo(index)">&times;</button>
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
    width: 332px;
    overflow: auto;
  }

  input {
    line-height: 25px;
    border-radius: 5px;
    padding-left: 4px;
  }

  #add {
    line-height: 25px;
    width: 40px;
    border-radius: 5px;
    opacity: 0.8;
  }

  #add:hover {
    cursor: pointer;
    opacity: 1;
  }

  .todolist li {
    background: #eeeeee;
    border: solid .5px grey;
    border-radius: 5px;
    list-style-type: none;
    line-height: 20px;
    margin-top: 30px;
  }

  .todoshow {
    padding: 5px 5px;
    word-wrap:break-word;
  }

  #destroy {
    position: absolute;
    right: 0;
    line-height: 20px;
    width: 20px;
    border: none;
    background: none;
    opacity: 0.8;
    color: #6d6e70;
  }

  #destroy:hover {
    opacity: 1;
    cursor: pointer;
  }

</style>
