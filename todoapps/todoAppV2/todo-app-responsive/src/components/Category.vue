<template>
  <div class="todoapp">
    <h1>todoo.</h1>

    <div>
      <h3 id="indication">Create a category</h3><br>
      <input placeholder="Add a category" v-model="newCategory" @keyup.enter="addCategory">
      <button @click="addCategory">Add</button>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="(category, index) in categories">
          <h3 id="categoryName">{{ category }}</h3>
          <button id="close" @click="deleteCategory(index)">&times;</button>

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
    </div>
    <div id="empty"></div>
  </div>

</template>

<script>

export default {
  data () {
    return {
      categories: [],
      newCategory: '',
      todos: [],
      newTodo: ''
    }
  },
  methods: {
    addCategory () {
      if (this.newCategory === '') {
        alert('Please enter your category name')
      } else {
      this.category = this.categories.push(this.newCategory)
      this.newCategory = ''
      }
    },
    deleteCategory (index) {
      this.$delete(this.categories, index)
    },
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
    margin: auto;
    text-align: center;
    box-sizing: border-box;
  }

  h1 {
    width: inherit;
    font-size: 3em;
    font-weight: bold;
    color: #cd595a;
    background: #f0f0f0;
    line-height: 70px;
    border-bottom: solid 3px #e0e0e0;
  }

  #indication {
    margin-top: 25px;
    font-weight: bold;
    color: #004990;
  }

  #categoryName {
    margin-bottom: -5px;
    color: #004990;
  }

  .col-md-4 {
    margin-bottom: 30px;
  }

  .col-md-4 button#close {
    position: relative;
    margin-top: -10px;
    margin-left: 300px;;
    background: none;
    border: none;
    width: 20px;
    font-size: 1em;
  }

  .col-md-4 button#close:hover {
    color: #a71930;
    font-weight: bold;
  }

  p {
    color: #cd595a;
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

  #empty {
    height: 30px;
  }

  /* todo */
  .todolist li {
    border: solid .5px grey;
    border-radius: 5px;
    list-style-type: none;
    line-height: 20px;
    margin-top: 20px;
    margin-left: 15px;
    margin-right: 15px;
  }

  .todolist li:hover {
    background: #efecea;
  }

  .todoshow {
    padding: 5px 5px;
    word-wrap:break-word;
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

  #destroy {
    position: absolute;
    line-height: 20px;
    right: 35px;
    width: 20px;
    border: none;
    background: none;
    opacity: 0.8;
    color: #6d6e70;
  }

  #destroy:hover {
    opacity: 1;
    cursor: pointer;
    font-weight: bold;
  }

</style>
