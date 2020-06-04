<template>
  <button :style="{ backgroundColor: color }" @click="onClick">
    {{ message }}
  </button>
</template>
<script>
export default {
  props: ["message", "color"],
  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
};
</script>
