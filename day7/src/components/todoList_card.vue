<template>
  <div class="card" :style="{backgroundColor:getRandomColor}">
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
    todoDate: String
  },
  computed: {
    getRandomColor: function() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    }
  }
};
</script>
<style  scoped>
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