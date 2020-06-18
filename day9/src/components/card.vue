<template>
  <div :class="card" @click="expand">
    <div class="container">
      <div :class="leftside">
        <div :class="areaPicture">
          <img
            src="https://picsum.photos/768"
            class="classimg"
            v-if="Datee != null && time != null "
            alt
          />
          <svg
            class="feather feather-plus classimg"
            v-else
            xmlns="http://www.w3.org/2000/svg"
            :width="30"
            :height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </div>
      </div>
      <div class="right-side">
        <div class="container3" v-if="check === false && card === 'card'">
          <div class="right-side-area">{{title}}</div>
          <div class="container" v-if="check === false && card === 'card' ">{{Datee}}</div>
          <div class="container" v-if="card === 'card2'">{{time}}</div>
        </div>
        <div class="container2" v-if="check === true && card === 'card' ">
          <div class="right-side-area">{{title}}</div>
          <div class="container" v-if="check === false && card === 'card' ">{{Datee}}</div>
          <div class="container" v-if="card === 'card2'">{{time}}</div>
        </div>

        <div class="container3" v-if="card === 'card2'||card === 'card3'">
          <div class="right-side-area">{{title}}</div>
          <div class="container">{{time}}</div>
        </div>
        <slot />
        <div class="container" v-if="check === true && card === 'card' ">
          <div v-if="Datee != null">{{Datee}}-{{time}}</div>
          <div class="per">
            <div class="Personal">Personal</div>
          </div>
          <div class="discription">{{Discription}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { check: false };
  },
  props: {
    title: String,
    Datee: String,
    time: String,
    Discription: String,
    areaPicture: String,
    card: String,
    leftside: String
  },
  methods: {
    expand: function() {
      console.log("Hello");
      this.check = !this.check;
    }
  }
};
</script>
<style scope>
.card2 {
  margin-top: 4%;
  background-color: #eea735b0;
  padding: 20px;
  border-radius: 10px;
}
.card {
  margin-top: 7%;
  background-color: rgb(247, 247, 247);
  padding: 20px;
  border-radius: 10px;
}
.card3 {
  margin-top: 4%;
  background-color: rgb(247, 247, 247);
  padding: 20px;
  border-radius: 10px;
}
.card:hover {
  background-color: rgba(173, 171, 171, 0.685);
  cursor: pointer;
  box-shadow: 5px 8px 9px 5px rgb(223, 223, 223);
}
.left-side {
  width: 20%;
  min-height: 100%;
}
.left-side2 {
  width: 5.5%;
  min-height: 100%;
  margin-right: 20px;
}
.container3 {
  margin-top: 13px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.container2 {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.classimg {
  padding: 7px 2px 4px 7px;
  width: 35px;
}
.left-side-area {
  width: 65%;
  background-color: #eea735b0;
  border-radius: 7px;
}
.left-side-area-middle {
  background-color: #ffffff;
  border-radius: 7px;
}
.right-side {
  width: 80%;
}
.right-side-area {
  font-size: 19px;
  font-weight: 600;
}
.Personal {
  width: 16%;
  margin: 20px 0;
  padding: 3px 15px;
  background-color: #eea735b0;
  border-radius: 15px;
  font-size: 12px;
  color: rgb(243, 243, 243);
}
.discription {
  width: 80%;
  font-size: 15px;
  word-wrap: break-word;
}
.per {
  width: 100%;
}
</style>