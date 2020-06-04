<template>
  <div class="modal-content">
    <div class="modal_header_text">{{msg}}</div>
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    msg: String
  },
  data() {
    return {
      text: ""
    };
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto+Condensed&display=swap");
* {
  font-family: "Roboto Condensed", sans-serif;
}

.modal-content {
  margin: 0 22%;
  display: flex;
  background-color: rgb(228, 37, 37);
}
.modal_header_text {
  /* font-size: 30px; */
  color: rgb(235, 228, 228);
  padding: 20px 10px;
  width: 92%;
}
</style>
