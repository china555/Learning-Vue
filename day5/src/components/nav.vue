<template>
  <div class="container">
    <div class="text_title">Tar Coop</div>
    <input class="test" placeholder="Search Text..." type="text" />
    <div>English</div>
    <div>user</div>
    <div>wa</div>
  </div>
</template>
<script>
export default {
  name: "nav2"
};
</script>

<style scoped>
.test {
  margin-left: 5%;
}
.text_title {
  font-size: 20px;
  font-weight: 700;
}
.container {
  display: flex;
  flex-wrap: wrap;
  padding: 10px 3%;
  width: 100%;
  background-color: white;
  justify-content: space-between;
}
input {
  font-size: 20px;
  border-radius: 7px;
  border: 0px solid black;
  outline: 0;
  width: 60%;
}
</style>
