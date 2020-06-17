<template>
  <div class="container">
    <div class="content-left">
      <div class="space">
        <div class="head container">
          <buttonplus :size="20" />
          <div class="text-header">taskly</div>
        </div>
        <div class="content-left-middle container">
          <div class="text">Weekly Pinned</div>
          <div class="view-all">view all</div>
        </div>
        <card
          title="Call doctor for tests"
          datetime="15 Mar 2020 - 9:00AM"
          Discription="Ask for blood tests and GYM certificate."
        />
        <card />
        <card />
      </div>
    </div>
  </div>
</template>
<script>
import buttonplus from "@/components/plus_button.vue";
import card from "@/components/card.vue";

export default {
  components: {
    buttonplus,
    card
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
  font-family: "Roboto", sans-serif;
}
body {
  margin: 0;
}
.container {
  display: flex;
  flex-wrap: wrap;
}
.head {
  color: rgb(14, 7, 43);
}

.content-left {
  width: 30vw;
  min-height: 100vh;
  background-color: #eaeef0;
}
.content-left-middle {
  margin-top: 10%;
}
.space {
  margin: 7%;
}
.text-header {
  margin: 5px 0 0 10px;
  font-size: 20px;
  font-weight: 700;
}
.text {
  font-size: 20px;
  font-weight: 500;
}
.view-all {
  margin-top: 5px;
  margin-left: 50%;
  color: #eea735;
}
</style>
