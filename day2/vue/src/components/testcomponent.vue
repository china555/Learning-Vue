<template>
  <div class="card">
    <div class="titleCard">{{title}}</div>
    <div class="text">{{text}}</div>
  </div>
</template>
<script scope>
export default {
  props: ["title", "text"]
};
</script>
<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  background-color: rgb(214, 24, 135);
  justify-content: center;
  width: 20vw;
  border-radius: 10px;
  margin: 50px;
}
.titleCard {
  color: rgb(245, 226, 226);
  font-size: 30px;
  width: 100%;
  font-weight: 700;
}
.text {
  padding: 10px;
  color: rgb(245, 226, 226);
  font-size: 16px;
  word-break: break-all;
}
</style>