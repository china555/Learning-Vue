<template>
  <div class="container">
    <div class="space">
      Todo:
      <input type="text" v-model="todo" />
      Date:
      <input type="date" v-model="date" />
      <button @click="add" class="btn">Enter</button>
    </div>
    <div style="width:100%">
      <div class="example">Example ToDo Card</div>
      <todoListCard :todoName="todo" :todoDate="date" />
    </div>
    <div style="width:50%">
      <todoListCard :todoName="todo" :todoDate="date" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import todoListCard from "@/components/todoList_card.vue";

export default {
  data() {
    return { todo: "", date: "" };
  },
  components: {
    todoListCard
  },
  methods: {
    add: function() {}
  }
};
</script>
<style  scoped>
* {
  border: none;
}
.example {
  margin-top: 20px;
  text-align: center;
  font-size: 20px;
  color: aliceblue;
}
.btn {
  padding: 2px 15px;
  color: black;
  border-radius: 5cm;
  margin-left: 2vw;
  font-size: 20px;
}
input {
  font-size: 20px;
  color: black;
  background-color: rgba(240, 248, 255, 0.646);
  outline: none;
}
.space {
  margin: 10px;
  width: 100%;
  color: aliceblue;
  text-align: center;
}
</style>
