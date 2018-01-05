let Todo = Vue.component('todo',{
  data: function() {
    return {
      todo: ['']
    }
  },
  methods: {
    addTodo: function() {
      todo.push(this.todo)
      // NEED TO PUSH NEW TODO INTO ARRAY (TOD IS AN EMPTY ARRAY TO WHICH WE PUSH NEW TODOS)
      // document.getElementById('todos').innerHTML = this.todo
    }
  },
  template: `<div>
    <input type="text" v-model.lazy="todo"></input>
    <button @click="addTodo">Add todo</button>
    <ul>{{ todo }}</ul>
  </div>`
})


let vm = new Vue ({
  el: '#app',
  data: {
    welcome: 'Hello World!',
    names: ['vanessa', 'augustin']
  },
  methods: {
    showTodo: function() {
      let todos = document.getElementById('todoo').value
    }
  }
})
