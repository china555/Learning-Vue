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
          areaPicture="left-side-area"
          card="card"
          title="Call doctor for tests"
          time="9:00AM"
          Datee="15 Mar 2020"
          Discription="Ask for blood tests and GYM certificate"
          leftside="left-side"
        />
        <card
          areaPicture="left-side-area"
          card="card"
          title="Beatrice's bday"
          Datee="22 Mar 2020"
          time="12:00PM"
          leftside="left-side"
        />

        <card
          areaPicture="left-side-area"
          title="Add new weekly pin"
          card="card"
          leftside="left-side"
        />
      </div>
    </div>
    <div class="content-right space">
      <div class="container justify-space-between">
        <div class="header_text">Today's schedule</div>
        <buttonplus :size="30" />
      </div>
      <div class="container">
        <div class="header_text" style="color: #eea735;">Thursday 11</div>
        <div class="arrow-area container">
          <div class="area-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-arrow-left"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </div>
          <div class="area-arrow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-arrow-right"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </div>
        </div>
      </div>
      <div class="content-middle-area">
        <card
          areaPicture="left-side-area-middle"
          card="card2"
          title="Wake up Buddy"
          leftside="left-side2"
          Datee="22 Mar 2020"
          time="12:00PM"
        />
        <card
          areaPicture="left-side-area-middle"
          card="card2"
          title="Morning Yoga"
          leftside="left-side2"
          Datee="22 Mar 2020"
          time="8:00AM"
        />
        <card
          areaPicture="left-side-area-middle"
          card="card3"
          title="Morning Yoga"
          leftside="left-side2"
          Datee="22 Mar 2020"
          time="8:00AM"
        >
          <ul>
            <li>Squat 10x3</li>
            <li>Push up 10x3</li>
            <li>Push up 10x3</li>
          </ul>
        </card>
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
@import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");
* {
  /* font-family: "Archivo", sans-serif; */
  font-family: "Rubik", sans-serif;
}
body {
  margin: 0;
}
.content-middle-area {
  margin: 40px 0 0 35px;
}
.justify-space-between {
  justify-content: space-between;
}
.container {
  display: flex;
  flex-wrap: wrap;
}
.head {
  color: rgb(14, 7, 43);
}
.header_text {
  font-size: 32px;
}
.content-left {
  width: 30vw;
  min-height: 100vh;
  background-color: #eaeef0;
  padding-top: 2vh;
}
.content-right {
  width: 62.97vw;
}
.content-left-middle {
  margin-top: 10%;
}
.space {
  margin: 3%;
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
  margin-left: 40%;
  color: #eea735;
}
.arrow-area {
  margin-left: 40px;
}
.area-arrow {
  background-color: rgb(240, 240, 240);
  margin-top: 5px;
  margin-right: 20px;
  border-radius: 15px;
  justify-content: center;
  height: 60%;
  padding: 3px;
}
</style>
