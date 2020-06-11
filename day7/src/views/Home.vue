<template>
  <div class="space">
    <div class="text">
      Todo:
      <input type="text" v-model="todo" />
      Date:
      <input type="date" v-model="date" />
      <button @click="add" class="btn">Enter</button>
    </div>
    <todoListCard />
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
.btn {
  color: black;
  border-radius: 5cm;
  margin-left: 2vw;
  font-size: 20px;
}
input {
  font-size: 20px;
  color: black;
}
.space {
  margin: 10px;
}
</style>
