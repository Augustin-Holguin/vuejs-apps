let todo = Vue.component('todo',{
  data: function() {
    return {
      todo: ''
    }
  },
  methods: {
    addTodo: function() {
      document.getElementById('todos').innerHTML = this.todo
    }
  },
  template: `<div>
    <input type="text" v-model.lazy="todo"></input>
    <button @click="addTodo">Add todo</button>
    <ul id="todos"></ul>
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
