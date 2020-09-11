<template>
  <div id="app">
    <!-- {{ message }} -->
    <input v-model="message" />
    <p v-if="isShowMessage && message === 'a'">{{ message }}</p>
    <!-- v-bind:key="index" -->
    <div v-for="(value, index) in listTodos" :key="index + '-' + value">
      {{ value }}, {{ index + "-" + value }}
    </div>
    <br />
    <br />

    <!-- Event Handler -->
    {{ counter }}
    <!-- v-on:click="counter++" -->
    <button @click="onIncrementCounter">click</button>
    <!-- <input @change="onChangeInputMessage" />
    {{ inputMessage }} -->

    <br />
    <br />
    <p>Compuational</p>
    <!-- computational -->
    <!-- {{ counterPowerTwo }} -->
    <br />
    <input v-model="inputForCompute" />
    <input v-model="inputMessage" />
    <br />
    {{ reverseMessage }}

    <!-- Component -->
    <br />
    <br />

    <p>Component</p>
    <Basic :message="inputMessage" error="Error Message" />
  </div>
</template>

<script>
import Basic from "./components/Basic.vue";
// 1,2,3,4
// 0,1,2,3

// 1,3,4
// 0,1,2

// 1,3,4 => temp
// temp => old
// old => rerender

// 1  ,2  ,3  ,4
// 0-1,1-2,2-3,3-4

// 1  ,3  ,4, 5
// 0-1,2-3,3-4,4-5
export default {
  components: {
    Basic
  },
  computed: {
    counterPowerTwo: function() {
      return this.counter * 2;
    },
    reverseMessage: function() {
      const reverseOne = this.inputForCompute
        .split("")
        .reverse()
        .join("");
      const reverseTwo = this.inputMessage
        .split("")
        .reverse()
        .join("");
      return reverseOne + reverseTwo;
    }
  },
  created: function() {
    // const arr = [1, 2, 3, 5, 6];
    // const sum = arr.reduce((a, b) => a + b);
    // console.log(sum);
    //
    // const curry = x => y => z => x + y + z;
    // const Two = curry(2);
    // const Three = Two(3);
    // const sumA = Three(5);
    // console.log(sumA);
  },
  data: function() {
    return {
      counter: 0,
      message: "Hello",
      isShowMessage: true,
      listTodos: [1, 2, 3, 4],
      inputMessage: "",
      inputForCompute: ""
    };
  },
  methods: {
    onIncrementCounter: function() {
      this.counter++;
    },
    onChangeInputMessage: function(event) {
      this.inputMessage = event.target.value;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
