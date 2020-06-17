<template>
  <div>{{jokedetail}}</div>
</template>
<script>
export default {
  name: "detail",
  data() {
    return {
      jokedetail: this.$store.state.joke[Number(this.$route.params.id)].joke
    };
  },
  mounted() {
    console.log(this.jokedetail);
    console.log(this.$route.params.id);
  }
};
</script>
