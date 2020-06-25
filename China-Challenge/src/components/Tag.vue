<template>
  <p>{{ tag }}</p>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Tag extends Vue {
  @Prop() private tag!: string;
}
</script>
<style scoped>
p {
  color: white;
  background-color: #eea835;
  padding: 5px 15px 5px 15px;
  display: inline;
  margin-right: 10px;
  font-size: 14px;
  border-radius: 20px;
  font-weight: 500;
}
</style>
