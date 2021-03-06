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
      state.todoList.push(payload.todo)
    },
    removeTodoList(state, payload) {
      state.todoList.splice(payload.index, 1);
    }
  },
  actions: {},
  modules: {}
});