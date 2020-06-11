import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todoList: [

    ]
  },
  mutations: {
    addTodoList(state, payload) {
      // const {
      //   todoTitle,
      //   todoDate,
      //   tododescription
      // } = payload
      state.todoList.push(payload)
    },
    removeTodoList(state,{payload}){
      state.todoList.splice(payload, 1);
    }
  },
  actions: {},
  modules: {}
});