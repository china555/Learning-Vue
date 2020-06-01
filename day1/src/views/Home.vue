<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <span v-if="seen">Now you can see</span>
    <span v-if="test">HelloWorld</span>
    <li v-for="(todo, index) in todos" :key="`todo-${index}`">{{ todo.text }} {{ index }}</li>
    <p>Using mustaches: {{ rawHtml }}</p>
    <p>
      Using v-h tml directive:
      <span style="color: red" v-html="rawHtml"></span>
    </p>
    <div>{{ msg }}</div>
    <div>{{ reversedMsg }}</div>
    <span>{{ now }}</span>
    <div>{{ reversedMsg2() }}</div>
    <span>{{ now2() }}</span>
    <div>{{ fullName }}</div>
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh</h1>
    <div v-if="Math.random() > 0.5">Now you can see</div>
    <div v-else>Now you don't</div>
    <ul v-for="(set,index) in sets" :key="`set-${index}`">
      <li v-for="(n,index) in even(set)" :key="`n-${index}`">{{n}}</li>
    </ul>-->
    <select v-model="select">
      <option v-for="option in options" :key="option.value">{{option.text}}</option>
    </select>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      seen: true,
      test: true,
      todos: [{ text: "Learning" }, { text: "Hello" }, { text: "Woeld" }],
      rawHtml: "adwad",
      msg: "Chinaa",
      firstname: "Kittikorn",
      lastname: "Keeratikriengkrai",
      fullName: "Kittikorn Keeratikriengkrai",
      awesome: true,
      sets: [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 0]
      ],
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" }
      ],
      select: "A"
    };
  },
  computed: {
    reversedMsg: function() {
      return this.msg
        .split("")
        .reverse()
        .join("");
    },
    now: function() {
      return Date.now();
    }
  },
  methods: {
    reversedMsg2: function() {
      return this.msg
        .split("")
        .reverse()
        .join("");
    },
    now2: function() {
      return Date.now();
    },
    even: function(numbers) {
      return numbers.filter(function(number) {
        return number % 2 === 0;
      });
    }
  },
  watch: {
    firstname: function(val) {
      this.fullName = val + " " + this.lastname;
    }
  },
  components: {
    // HelloWorld
  }
};
</script>
