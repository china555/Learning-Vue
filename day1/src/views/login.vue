<template>
  <div class="container">
    <div class="box">
      <div class="headddd">login</div>
      <div class="login_option">
        <a @click="email">Email</a>
        <a @click="phone">Phone</a>
      </div>
      <div class="space">
        <div class="inputtext">{{check}}</div>
        <input type="text" />
        <div v-if="check === 'Email'">
          <div class="inputtext">Password</div>
          <input type="text" />
        </div>
      </div>
      <div>
        <button @click="submit" class="btn">submit</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { check: "Email" };
  },
  methods: {
    email: function() {
      this.check = "Email";
    },
    phone: function() {
      this.check = "Phone Number";
    },
    submit: function() {
      alert("submit already");
    }
  }
};
</script>
<style scoped>
.btn {
  border-radius: 5px;
}
.space {
  margin: 30px 0;
}
.inputtext {
  text-align: left;
  margin: 30px 0 10px 15%;
  color: aliceblue;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgb(255, 255, 255);
}
input {
  width: 70%;
}
.box {
  width: 40%;
  flex-wrap: wrap;
  background-color: rgba(0, 0, 0, 0.83);
  justify-content: center;
  padding: 10px;
}
.headddd {
  width: 100%;
  color: aliceblue;
  font-size: 30px;
}
.login_option > a {
  color: aliceblue;
  text-decoration: none;
  margin: 20px;
}
.login_option > a:hover {
  cursor: pointer;
  color: rgb(5, 16, 49);
}
.login_option > a:active {
  border-bottom-color: rgb(255, 13, 13);
}
.login_option {
  margin-top: 20px;
  width: 100%;
}
</style>