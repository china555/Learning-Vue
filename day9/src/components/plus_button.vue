<template>
  <div class="background-icon">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="size"
      :height="size"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#ffffff"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="feather feather-plus"
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    size: Number
  }
};
</script>
<style scope>
.background-icon {
  background-color: #eea735a8;
  display: block;
  padding: 5px;
  border-radius: 120% 80% 80% 80% / 120% 80% 80% 60%;
}
</style>