<template>
  <div class="container">
    <div class="card">
      <div>Todo : {{todoName}} Date: {{todoDate}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    todoName: String,
    todoDate: String
  }
};
</script>
<style  scoped>
.card {
  text-align: center;
  margin: 20px;
  padding: 20px 50px;
  border-radius: 4px;
  background-color: rgb(218, 102, 154);
}
</style>