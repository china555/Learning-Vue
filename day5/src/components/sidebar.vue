<template>
  <div class="container">
    <ul class="deco">
      <li>
        <router-link to>Hello</router-link>
      </li>
      <li>World</li>
      <li>Hello2</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "sidebar"
};
</script>
<style scoped>
li {
  font-size: 18px;
  margin: 20px 0;
}
.deco > li > a {
  text-decoration: none;
}
.container {
  border-top: 1px solid rgba(214, 210, 210, 0.326);
  display: block;
  padding: 10px 20px;
  width: 15%;
  height: 90vh;
  background-color: white;
}
</style>