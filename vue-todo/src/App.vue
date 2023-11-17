<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:saveTodo="saveTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems"></TodoList>
    <TodoClearButton v-on:clearAllTodos="clearAllTodos"></TodoClearButton>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoClearButton from './components/TodoClearButton.vue'
export default {
  components:{
    TodoHeader,
    TodoInput,
    TodoList,
    TodoClearButton
  },
  data(){
    return {
      todoItems : []
    }
  },
  methods:{
    saveTodo(todoItem){
    
      let obj = {completed : false, todoItem : todoItem }
      localStorage.setItem(todoItem,JSON.stringify(obj))
      this.todoItems.push(obj)
    },
    clearAllTodos(){
      localStorage.clear();
      this.todoItems=[];
    }
  },
  created() {
    for(let i =0 ; i< localStorage.length;i++){
      this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i)))) 
    }

  }
}
</script>

<style>
body {
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
