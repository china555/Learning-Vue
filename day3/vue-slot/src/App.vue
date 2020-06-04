<template>
  <div class="container">
    <button class="btn" v-on:click="check">Click me!!!</button>
    <div class="modal" :style="{display:display2,}">
      <modal :msg="text" style="font-size:30px">
        <div class="close" v-on:click="closed">X</div>
      </modal>
      <div class="content">
        <div>Hello World!!</div>
        <div style="padding: 10px 0px">Modals are awesome!</div>
      </div>
      <modal :msg="text2" style="font-size:15px" />
    </div>
  </div>
</template>

<script>
import modal from "./components/Modal_header.vue";
export default {
  data() {
    return { text: "Modal Header", text2: "Modal Footer", display2: "none" };
  },
  components: {
    modal
  },
  methods: {
    check() {
      this.display2 = "block";
    },
    closed() {
      this.display2 = "none";
    }
  }
};
</script>

<style>
.modal {
  position: fixed; /* Stay in place */
  z-index: 1;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.container {
  display: flex;
  justify-content: right;
  flex-wrap: wrap;
}
.content {
  margin: 0px 22%;
  padding: 10px;
  background-color: whitesmoke;
}
.close {
  font-weight: 100;
  right: 100%;
  height: 10%;
  color: white;
  padding: 10px 20px 10px 20px;
  font-size: 20px;
}
.close:hover,
.close:focus {
  background-color: rgb(241, 187, 198);
  color: black;
  text-decoration: none;
  cursor: pointer;
}
.btn {
  margin: 20px;
  background-color: rgb(34, 34, 231);
  font-size: 30px;
  border-radius: 7px;
  outline: none;
  border-color: rgb(34, 34, 231);
}
body {
  margin: 0;
}
</style>
