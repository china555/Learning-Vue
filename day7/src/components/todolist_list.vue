<template>
  <div class="data">
    {{index+1}} :
    Todo : {{todoName}}
    Date: {{todoDate}}
    <hr />
  </div>
</template>
<script>
export default {
  props: {
    todoName: String,
    todoDate: String,
    index: Number
  }
};
</script>
<style  scoped>
.list {
  width: 100%;
  background-color: rgba(44, 45, 45, 0.585);
  border-radius: 7px;
  margin-right: 20px;
  margin-top: 13px;
  word-wrap: break-word;
}
.data {
  margin: 20px;
  color: azure;
}
</style>