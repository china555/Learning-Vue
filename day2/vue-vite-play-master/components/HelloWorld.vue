<template> </template>

<script lang="ts">
import useCounter from "../features/use-counter.ts";

export default {
  setup() {
    const { count, increment, decrement, doubleCount } = useCounter(10);

    return {
      count,
      increment,
      decrement,
      doubleCount
    };
  }
};
</script>
<style scoped></style>
