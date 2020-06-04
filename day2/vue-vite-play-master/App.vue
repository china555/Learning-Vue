<template>
  <div class="container">
    <formCustomEvent v-on:onClick="onClickParent" :message="parentMessage" />
  </div>
</template>

<script>
// import Button from "./components/Button.vue";
import formCustomEvent from "./components/form-custom-event.vue";
// <Button
//   :message="messageForButton"
//   color="#673ab7"
//   v-on:onClick="onClickParent"
// />

export default {
  name: "App",
  data() {
    return {
      parentMessage: "Hello Children",
      cards: [
        { title: "a", text: "aa" },
        { title: "b", text: "bb" },
        { title: "c", text: "cc" }
      ]
    };
  },
  methods: {
    onClickParent(text) {
      console.log(text);
      this.parentMessage = text;
    }
  },
  components: {
    formCustomEvent
  }
};
</script>
