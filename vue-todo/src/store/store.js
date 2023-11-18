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
   mutations:{

   },

})  