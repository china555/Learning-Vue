<template>
  <div id="app">
    <div class="container">
      <div class="sidebar">
        <h5 class="text-title">
          <IconComponent /><span style="margin-left: 10px;">taskly</span>
        </h5>
        <p class="text-subtitle text-left text-inline">Weekly Pinned</p>
        <p
          class="text-right text-inline text-primary-color"
          style="font-size: 16px;"
        >
          View all
        </p>
        <div class="pin-list-card">
          <PinCardComponent
            :title="card.title"
            :subtitle="card.subtitle"
            :content="card.content"
            :tags="card.tags"
            :time="card.time"
            :isShadow="true"
            v-for="(card, index) in listPined"
            :key="`pin-${index}`"
          />
        </div>
      </div>
      <div class="content-container">
        <div class="row" style="justify-content: space-between;">
          <div>
            <p class="text-title-head">Today's schedule</p>
            <p class="text-title-head text-primary-color">Thursday 11</p>
          </div>
          <div>
            <IconComponent size="10" />
          </div>
        </div>
        <div class="columns" style="margin-top: 20px;">
          <PinCardComponent
            :title="card.title"
            :subtitle="card.subtitle"
            :content="card.content"
            :tags="card.tags"
            :time="card.time"
            :isActive="card.isActive"
            v-for="(card, index) in listTasks"
            :key="`pin-${index}`"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import IconComponent from "@/components/Icon.vue";
import PinCardComponent from "@/components/SidebarCard.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    IconComponent,
    PinCardComponent
  }
})
export default class App extends Vue {
  private listPined: Array<object> = [
    {
      title: "Call doctor for tests",
      subtitle: "15 Mar 2020 - 9.00 AM",
      content: "Ask for blood tests and GYM certificate",
      tags: ["personal", "individual", "morining"],
      image: "https://picsum.photos/768"
    },
    {
      image: "https://picsum.photos/768",
      title: "Beatrice's bday",
      time: "22 Mar 2020"
    }
  ];
  private listTasks: Array<object> = [
    {
      title: "Wake up Buddy",
      image: "https://picsum.photos/768",
      time: "7.00 AM",
      isActive: true
    },
    {
      title: "Morning Yoga",
      image: "https://picsum.photos/768",
      time: "8.00 AM",
      isActive: true
    }
  ];
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.columns {
  display: flex;
  flex-direction: column;
}
.row {
  display: flex;
  flex-direction: row;
}

.container {
  display: flex;
  flex-direction: row;
  min-height: 100vh;
}

.sidebar {
  width: 40vw;
  background-color: #eaeef0;
  padding-left: 30px;
  padding-right: 30px;
}

.content-container {
  padding-top: 30px;
  width: 60vw;
  padding-left: 30px;
  margin-left: 30px;
  margin-right: 30px;
}

.text-inline {
  display: inline;
}
.text-title {
  font-weight: bold;
  font-size: 20px;
}

.text-left {
  float: left;
}

.text-right {
  float: right;
}
.text-title-head {
  font-weight: bold;
  font-size: 30px;
  margin-block-start: 0px;
  margin-block-end: 0px;
}

.text-subtitle {
  font-size: 18px;
}

.text-primary-color {
  color: #eea835;
}

.pin-list-card {
  display: block;
  margin: auto;
}
</style>
