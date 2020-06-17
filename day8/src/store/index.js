import Vue from "vue";
import Vuex from "vuex";
const axios = require("axios").default;
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    joke: [],
  },
  mutations: {
    async getJoke(state) {
      const {
        data: { value },
      } = await axios.get("http://api.icndb.com/jokes/random/20");
      state.joke = value;
      console.log(state.joke);
    },
  },
  actions: {},
  modules: {},
});
