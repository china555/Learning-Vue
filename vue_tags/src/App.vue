<template>
  <div class="container">
    <div class="box">
      <div v-for="(tag,index) in tags" :key="`tag_${index}`" class="container2">
        {{tag}}
        <span class="cancel" v-on:click="remove(index)">X</span>
      </div>
      <input v-model="text" v-on:keyup.enter="addtags" />
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  data() {
    return {
      tags: [],
      text: ""
    };
  },
  methods: {
    addtags: function() {
      this.tags.push(this.text);
      this.text = "";
    },
    remove: function(index) {
      this.tags.splice(index, 1);
    }
  },
  components: {
    // HelloWorld
  }
};
</script>

<style>
input {
  width: 20%;
  font-size: 20px;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.box {
  padding: 3%;
  width: 50%;
  background-color: aqua;
  display: flex;
  flex-wrap: wrap;
}
.container2 {
  margin: 10px 5px;
  background-color: lawngreen;
  padding: 5px;
}
.cancel {
  color: white;
  cursor: pointer;
}
</style>
