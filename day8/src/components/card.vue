<template>
  <div class="container">
    <div class="card-area">
      <div class="card">awdawdwad</div>
    </div>
    <div class="card-area">
      <div class="card">awdawdwad</div>
    </div>
    <div class="card-area">
      <div class="card">awdawdwad</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scope>
.container {
  display: flex;
  flex-wrap: wrap;
}
.card-area {
  width: 33%;
  display: flex;
  justify-content: center;
}
.card {
  background-color: rgb(139, 214, 233);
  margin: 5vh 2vw;
  padding: 10px 10% 20% 10%;
  border-radius: 6px;
}
.content-card {
  color: white;
}
</style>