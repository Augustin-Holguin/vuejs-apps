<template>
  <div class="todoapp">
    <h1>todoo.</h1>

    <div>
      <h3 id="indication">Create a category</h3><br>
      <input placeholder="Add a category" v-model="newCategory" @keyup.enter="addCategory" :categories="categories">
      <button @click="addCategory">Add</button>
    </div>

    <div v-for="category in categories">
      <div class="col-md-4">
        <app-category v-show="cat" :bouya="cat" v-on:changeCategoryState="updateCategoryState($event)"></app-category>
      </div>
    </div>

  </div>
</template>

<script>
import Category from './Category'
import Todo from './Todo'

export default {
  components: {
    'app-category': Category
  },
  data () {
    return {
      categories: [],
      newCategory: '',
      cat: true
    }
  },
  methods: {
    addCategory () {
      if (this.newCategory === '') {
        alert('Please enter your category name')
      } else {
        this.newCategory = this.cat
        this.categories.push(this.newCategory)
        this.newCategory = ''
      }
    },
    updateCategoryState (kiki) {
      this.cat = kiki
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
</style>
