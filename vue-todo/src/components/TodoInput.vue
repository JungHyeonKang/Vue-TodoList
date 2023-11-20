<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodo" v-on:keyup.enter="addTodo">
    <span class="addContainer" v-on:click="addTodo">			
			<i class="fa-regular fa-plus addBtn">+</i>
    </span>

    <CustomModal v-if="showModal" @close="showModal = false">
      <h3 slot="header">
        경고!
         <i class="closeModalBtn fa fa-times" 
          aria-hidden="true" 
          @click="showModal = false">
          닫기
        </i>
      </h3>
      <p slot="body">할 일을 입력하세요.</p>
    </CustomModal>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
import CustomModal from './CustomModal.vue'
export default {
    data(){
        return{
            newTodo : "",
            showModal : false
        }
    },
    methods:{
        addTodo(){
            if(this.newTodo !== ''){
                this.saveTodo(this.newTodo)
                this.clearInput();
            }else{
                this.showModal = !this.showModal
            }
          
        },
        clearInput(){
            this.newTodo = ""
        },
        ...mapMutations(['saveTodo'])
    },
    components:{
        CustomModal
    }
}
</script>

<style scoped>
input:focus {
	outline: none;
}
.inputBox {
	background: white;
	height: 50px;
	line-height: 50px;
	border-radius: 5px;
}
.inputBox input {
	border-style: none;
	font-size: 0.9rem;
}
.addContainer {
	float: right;
	background: linear-gradient(to right, #6475FB, #8763FB);
	display: block;
	width: 3rem;
	border-radius: 0 5px 5px 0;
}
.addBtn {
	color: white;
	vertical-align: middle;
}
</style>