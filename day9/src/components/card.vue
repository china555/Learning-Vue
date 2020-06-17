<template>
  <div class="card" @click="expand">
    <div class="container">
      <div class="left-side">
        <div class="left-side-area">
          <img src="https://picsum.photos/768" alt />
        </div>
      </div>
      <div class="right-side">
        <div class="right-side-area">{{title}}</div>
        <div class="expand" v-if="check === true ">
          <div>{{Datetime}}</div>
          <div class="Personal">Personal</div>
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
    Datetime: String,
    Discription: String
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
.card {
  margin-top: 5%;
  background-color: rgb(247, 247, 247);
  padding: 20px;
  border-radius: 10px;
}
.card:hover {
  background-color: rgba(173, 171, 171, 0.685);
  cursor: pointer;
}
.left-side {
  width: 20%;
  min-height: 100%;
}
img {
  padding: 7px 2px 4px 7px;
  width: 35px;
}
.left-side-area {
  width: 70%;
  background-color: #eea735b0;
  border-radius: 7px;
}
.right-side {
  width: 80%;
}
.right-side-area {
  font-size: 19px;
  font-weight: 600;
}
.expand {
  /* display: none; */
}
.Personal {
  width: 20%;
  margin: 20px 0;
  padding: 3px 15px;
  background-color: #eea735b0;
  border-radius: 15px;
  font-size: 12px;
  color: rgb(243, 243, 243);
}
.discription {
  width: 80%;
  font-size: 12px;
  word-wrap: break-word;
}
</style>