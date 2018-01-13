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
    }
  }
}
</script>

<style>
  .todoapp {
    width: 100%;
    margin: auto;
    text-align: center;
    position: absolute;
    box-sizing: border-box;
    min-height: 100%;
  }

  h1 {
    font-size: 3em;
    color: #f0f0f0;
    background: #49c0b6;
    line-height: 70px;
    border-bottom: solid 3px #f0f0f0;
  }

  h3 {
    color: #008374;
    margin-bottom: 10px;
  }

  .categories {
    margin-top: 15px;
    margin-bottom: 30px;
    display: inline-block;
    margin-left: 10px;
    margin-right: 10px;
  }

  .categories ul {
    list-style: none;
  }

  .categories ul li {
    width: 330px;
  }

  p {
    color: #49c0b6;
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
