<template>
  <div class="todoapp">

    <div class="container">
      <div class="row">
          <div class="col-md-4">
            <button id="close" @click="deleteCategory()">&times;</button><br>
            <todo></todo>
          </div>
      </div>
    </div>

    <div id="empty"></div>
  </div>
</template>

<script>
import Todo from './Todo'

export default {
  components : {
    Todo
  },
  props: {
    bouya: {
      type: Boolean
    }
  },
  data () {
    return {
      kikou: this.bouya
    }
  },
  methods: {
    deleteCategory () {
      this.kikou = false
      this.$emit('changeCategoryState', this.kikou)
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
