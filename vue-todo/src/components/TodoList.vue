<template>
  <div>
    <transition-group name="list" tag="ul">
      <li v-for="(todo , index) in todoList" v-bind:key="index" class="shadow">
        <input type="checkbox" @click="checkTodo({ todo, index})" v-bind:class="{checkBtnCompleted : todo.completed}">
        <span>{{todo.todoItem}}</span>
        <span class="removeBtn"  @click="removeTodo({todo , index})">
            <i class="fas fa-trash-alt">삭제</i>
        </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
import {mapGetters,mapMutations} from 'vuex'

export default {
    methods:{
      ...mapMutations(['checkTodo','removeTodo']),
    },
    computed:{
      ...mapGetters(['todoList'])
    },
}
</script>

<style scope>
ul {
	list-style-type: none;
	padding-left: 0px;
	margin-top: 0;
	text-align: left;
}
li {
	display: flex;
	min-height: 50px;
	height: 50px;
	line-height: 50px;
	margin: 0.5rem 0;
	padding: 0 0.9rem;
	background: white;
	border-radius: 5px;
}
.checkBtn {
	line-height: 45px;
	color: #62acde;
	margin-right: 5px;
}
.checkBtnComplated {
	color: #b3adad;
}
.textCompleted {
	text-decoration: line-through;
	color: #b3adad;
}
.removeBtn {
	margin-left: auto;
	color: #de4343;
}

/* transition css */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>