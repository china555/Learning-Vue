<template>
  <div>
    {{ message }}
    <input v-model="text" />
    <button @click="onClickEmit">change</button>
  </div>
</template>
<script>
export default {
  props: ["message"],
  data() {
    return {
      text: ""
    };
  },
  methods: {
    onClickEmit() {
      this.$emit("onClick", this.text);
    }
  }
};
</script>
