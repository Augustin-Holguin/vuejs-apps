<template>
  <div class="todoapp">
    <h1>TODO APP</h1>
    <p>Add below your todos</p>

    <div>
      <h3>Create a category</h3><br>
      <input placeholder="Add a category" v-model="newCategory" @keyup.enter="addCategory">
      <button @click="addCategory">Add</button>
    </div>

    <div class="container">
      <div class="row">
        <div v-for="(category, index) in categories">
          <div class="col-md-4">
            <h3 style="color:#ffc168">{{ category }}</h3>
            <button id="close" @click="deleteCategory(index)">&times;</button>
              <todo></todo>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import Todo from './Todo'

export default {
  components : {
    Todo
  },
  data () {
    return {
      categories: [],
      newCategory: ''
    }
  },
  methods: {
    addCategory () {
      if (this.newCategory === '') {
        alert('Please enter your category name')
      } else {
      this.categories.push(this.newCategory)
      this.newCategory = ''
      }
    },
    deleteCategory (index) {
      this.categories.splice(index, 1)
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
    color: #f0f0f0;
    background: #caccd1;
    line-height: 70px;
    border-bottom: solid 3px #f0f0f0;
  }

  h3 {
    color: #cd595a;
  }

  .col-md-4 {
    margin-top: 20px;
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

</style>
