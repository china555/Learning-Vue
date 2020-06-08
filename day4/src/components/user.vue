<template>
  <div class="main">
    User
    <br />
    <router-link :to="{name: 'Admin'}">Admin</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "user"
};
</script>
<style scoped>
.main {
  background: rgb(53, 202, 243);
}
</style>