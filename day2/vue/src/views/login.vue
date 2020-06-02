<template>
  <div class="container">
    <div class="box">
      <router-link to="/">Click me!!!</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return;
  }
};
</script>
<style  scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.box {
  width: 50%;
  background-color: blueviolet;
}
</style>