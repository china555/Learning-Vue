<template>
  <div class="hello">
    {{state}}
    <button @click="increase">Click me!</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  computed: {
    state: function() {
      return this.$store.state.count;
    }
  },
  methods: {
    increase: function() {
      this.$store.commit("increase");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
