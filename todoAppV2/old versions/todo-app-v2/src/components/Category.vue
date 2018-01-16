<template>
  <div class="todoapp">
    <h1>TODO APP</h1><br>
    <p>Add below your todos</p><br>

    <div>
      <h3>Create a category</h3>
      <input placeholder="Add a category" v-model="newCategory" @keyup.enter="addCategory">
      <button @click="addCategory">Add</button>
    </div>

    <div class="categories" v-for="(category, index) in categories">
      <ul>
        <li>
          <h3 style="color:#ffc168">{{ category }}</h3>
          <button id="close" @click="deleteCategory(index)">&times;</button>
          <todo></todo>
        </li>
      </ul>
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
    width: 100%;
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
    margin-bottom: 10px;
  }

  .categories {
    position: sticky;
    float: left;
    margin-left: 73px;
    margin-top: 20px;
    display: inline-block;
    margin-bottom: 30px;
  }

  .categories button#close {
    position: absolute;
    top: 0;
    right: 0;
    background: none;
    border: none;
    width: 20px;
    font-size: 1em;
  }

  .categories button#close:hover {
    color: #a71930;
    font-weight: bold;
  }

  .categories ul {
    list-style: none;
  }

  .categories ul li {
    width: 330px;
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

  .categories.todolist {
    position: absolute;
    width: 340px;
    margin-top: 10px;
  }


</style>
