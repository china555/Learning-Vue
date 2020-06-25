<template>
  <div
    id="icon"
    :style="{
      paddingLeft: Number(size) + 5 + 'px',
      paddingRight: Number(size) + 5 + 'px',
      paddingTop: size + 'px',
      paddingBottom: size + 'px'
    }"
  >
    +
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Icon extends Vue {
  @Prop({ default: 5 }) private size!: number;
}
</script>
<style scoped>
#icon {
  background-color: #eea835;
  display: inline-block;
  color: white;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 50px;
  border-top-left-radius: 50px;
  border-top-right-radius: 32px;
  font-size: 20px;
  font-weight: bold;
}
</style>
