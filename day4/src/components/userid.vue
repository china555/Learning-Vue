<template>
  <div class="main">User {{id}}</div>
</template>
<script>
export default {
  name: "userid",
  props: {
    id: Number
  }
};
</script>
<style scoped>
.main {
  background: rgb(53, 202, 243);
}
</style>