<template>
  <div>
    <div class="container2">
      <nav2 />
    </div>
    <div class="container">
      <sidebar />
      <router-view />
    </div>
  </div>
</template>
<script>
import nav2 from "@/components/nav.vue";
import sidebar from "@/components/sidebar.vue";
export default {
  data() {
    return {};
  },
  components: {
    nav2,
    sidebar
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Abel&display=swap");
* {
  font-family: "Abel", sans-serif;
}
body {
  background-color: rgb(243, 243, 243);
  margin: 0;
}
.container {
  display: flex;
  flex-wrap: wrap;
}
.container2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
