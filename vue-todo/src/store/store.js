import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const todoStorage = {
    fetch(){
        const arr = [];
        for(let i =0 ; i< localStorage.length;i++){
            arr.push(JSON.parse(localStorage.getItem(localStorage.key(i)))) 
          }
          return arr;
    }
}

export const store = new Vuex.Store({
   state:{
    todoItems : todoStorage.fetch()
   },
   getters:{
    todoList(state){
        return state.todoItems;
    }
   },
   mutations:{ // 항상 state 포함
    saveTodo(state,todoItem){
        let obj = {completed : false, todoItem : todoItem }
        localStorage.setItem(todoItem,JSON.stringify(obj))
        state.todoItems.push(obj)
    },
    clearAllTodos(state){
        localStorage.clear();
        state.todoItems=[];
    },
    checkTodo(state ,payload){
        state.todoItems[payload.index].completed = !state.todoItems[payload.index].completed
        localStorage.removeItem(payload.todo.todoItem)
        localStorage.setItem(payload.todo.todoItem,JSON.stringify(payload.todo))
    },
    removeTodo(state,payload){
        localStorage.removeItem(payload.todo.todoItem)
        state.todoItems.splice(payload.index , 1)
    }
   },

})  