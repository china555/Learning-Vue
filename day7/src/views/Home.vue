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
      <div class="container">
        <todoListCard :todoName="todo" :todoDate="date" />
      </div>
    </div>
    <div style="width:100%" v-if="this.$store.state.todoList.length != 0">
      <div style="width:50%" class="container">
        <todoListCard
          :todoName="todoName"
          :todoDate="todoDate"
          v-for="({todoName,todoDate},index) in this.$store.state.todoList "
          :key="`-${index}`"
        >
          <div class="close" @click="remove">X</div>
        </todoListCard>
      </div>
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
    add: function() {
      this.$store.commit({
        type: "addTodoList",
        todo: {
          todoName: this.todo,
          todoDate: this.date
        }
      });
      this.todo = "";
      this.date = "";
    },
    remove: function(index) {
      this.$store.commit({
        type: "removeTodoList",
        position: index
      });
    }
  }
};
</script>
<style  scoped>
* {
  border: none;
}
.close {
  color: aliceblue;
  padding: 5px;
  margin-left: 80%;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bolder;
}
.close:hover {
  background-color: rgba(240, 248, 255, 0.646);
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
