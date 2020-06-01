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
        <div v-if="check === 'Email'">
          <input placeholder="example@gmail.com" type="text" />
          <div class="inputtext">Password</div>
          <input placeholder="*********" type="text" />
        </div>
        <div v-else>
          <input placeholder="+66123456789" type="text" />
        </div>
      </div>
      <div>
        <button @click="submit" class="btn">Continue</button>
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
  width: 70%;
  border-radius: 5px;
  padding: 20px;
  border: none;
  background-color: rgba(251, 3, 3, 0.932);
  color: aliceblue;
  font-weight: 500;
}
.space {
  margin: 30px 0;
}
.inputtext {
  text-align: left;
  margin: 30px 0 10px 10%;
  color: aliceblue;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: rgb(255, 255, 255);
}
input {
  width: 80%;
  padding: 10px;
  font-size: 20px;
  border-radius: 9px;
}
.box {
  width: 40%;
  flex-wrap: wrap;
  border-radius: 7px;
  background-color: rgba(0, 0, 0, 0.83);
  justify-content: center;
  padding: 10px;
}
.headddd {
  margin-top: 30px;
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
  border-bottom: 3px solid red;
}
.login_option {
  margin-top: 20px;
  width: 100%;
}
</style>