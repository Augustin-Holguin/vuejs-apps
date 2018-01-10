let Todo = Vue.component('todo',{
  data: function() {
    return {
      todo: "[]"
    }
  },
  methods: {
    addTodo: function() {
      //  let todo = ['']
      todo.push(this.todo)
      // NEED TO PUSH NEW TODO INTO ARRAY (TOD IS AN EMPTY ARRAY TO WHICH WE PUSH NEW TODOS)
      // document.getElementById('todos').innerHTML = this.todo
    }
  },
  template: `<div>
    <input type="text" v-model.lazy="todo"></input>
    <button @click="addTodo">Add todo</button>
    <ul><li>{{ todo }}</li></ul>
  </div>`
})


let vm = new Vue ({
  el: '#app',
  data: {
    welcome: 'Hello World!',
    names: ['vanessa', 'augustin'],
    todoo: ''
  },
  methods: {
    showTodo: function() {
      console.log("Yo")
    },
    addName: function() {
      this.names.push(document.getElementById(newName))
    }
  }
})
