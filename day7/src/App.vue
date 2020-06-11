<template>
  <div class="container">
    <div class="titletext">TODO LIST</div>
    <router-view />
  </div>
</template>

<style>
/* * {
  color: aliceblue;
} */
.titletext {
  text-align: center;
  font-size: 32px;
  width: 100%;
  color: aliceblue;
}

body {
  background-color: #3d5ca5;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
