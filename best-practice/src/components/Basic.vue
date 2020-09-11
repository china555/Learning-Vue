<template>
  <div>
    <h4>Render From Component</h4>
    {{ message }}
    <p style="color:red">{{ error }}</p>
  </div>
</template>
<script>
export default {
  props: ["message", "error"]
};
</script>
