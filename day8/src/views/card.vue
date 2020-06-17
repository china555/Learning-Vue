<template>
  <div class="container">
    <div class="card-area" v-for="({ id, joke }, index) in jokes" :key="`-${index}`">
      <div class="card" @click="seeMoreDetail(id,index)">
        <div class="content-card-header">{{ id }}</div>
        <!-- <div class="content-card">{{ joke }}</div> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.commit("getJoke");
  },
  data() {
    return {
      countData: this.$store.state.joke.length,
      ID: "",
      content: ""
    };
  },
  computed: {
    jokes: function() {
      return this.$store.state.joke;
    }
  },
  methods: {
    seeMoreDetail: function(id, index) {
      this.$router.push({ name: "detail", params: { id: index } });
    }
  }
};
</script>

<style scope>
.card-area {
  width: 33%;
  display: flex;
  justify-content: center;
}
.card {
  background-color: rgb(139, 214, 233);
  border-radius: 6px;
  width: 20vw;
  margin: 20px 0;
}
.content-card-header {
  color: rgb(255, 242, 242);
  word-break: break-all;
  padding: 10px 30px;
  font-size: 20px;
}
.content-card {
  color: white;
  word-break: break-all;
  padding: 10px 30px;
}
.card:hover {
  background-color: rgb(233, 139, 139);
}
</style>
