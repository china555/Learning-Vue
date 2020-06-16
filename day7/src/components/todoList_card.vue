<template>
  <div class="card" :style="{backgroundColor:color}">
    <slot />
    <div class="text">
      <div>Todo : {{todoName}}</div>
      <div>Date: {{todoDate}}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    todoName: String,
    todoDate: String,
    color: String
  }
};
</script>
<style  >
.text {
  padding: 20px 50px;
}
.card {
  text-align: center;
  margin: 20px;
  border-radius: 4px;
  background-color: rgb(218, 102, 154);
}
</style>