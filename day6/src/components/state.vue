<template>
  <div>
    {{test}}
    <button @click="increase">click me!!!</button>
  </div>
</template>
<script>
export default {
  computed: {
    test: function() {
      return this.$store.state.count;
    }
  },
  methods: {
    increase: function() {
      this.$store.commit("increase");
      console.log(this.$store.state.count);
    }
  }
};
</script>