<template>
  <div class="container">
    <div class="box">
      <div class="headddd">login</div>
      <div class="login_option">
        <button @click="email">Email</button>
        <button @click="phone">Mobile Number</button>
      </div>
      <div class="space">
        <div class="inputtext">{{check}}</div>
        <div v-if="check === 'Email'">
          <input placeholder="example@gmail.com" type="text" />
          <div class="inputtext">Password</div>
          <input placeholder="*********" type="text" />
        </div>
        <div v-else>
          <select class="select_option" name id>
            <option value>+66</option>
            <option value>+98</option>
            <option value>+76</option>
            <option value>+56</option>
          </select>
          <input placeholder="Enter Mobile Number" type="text" />
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
      this.check = "Mobile Number";
    },
    submit: function() {
      alert("submit already");
    }
  }
};
</script>
<style scoped>
*:focus {
  outline: none;
}
.select_option {
  font-size: 20px;
  margin-right: 10px;
  background-color: inherit;
  color: aliceblue;
  padding: 10px 20px 10px 0;
  text-align: left;
  border-radius: 5px;
}
.select_option > option {
  background-color: #1a1717;
  color: white;
}
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
  width: calc(60% + 20px);
  padding: 10px;
  font-size: 20px;
  border-radius: 9px;
  background-color: #1a1717;
  color: aliceblue;
  border: solid 1px #6c6969;
}
.box {
  width: 40%;
  flex-wrap: wrap;
  border-radius: 7px;
  background-color: #1a1717;
  justify-content: center;
  padding: 10px;
}
.headddd {
  margin-top: 30px;
  width: 100%;
  color: aliceblue;
  font-size: 30px;
}
.login_option > button {
  font-size: 20px;
  border: none;
  background-color: inherit;
  color: aliceblue;
  text-decoration: none;
  margin: 20px;
}
.login_option > button:hover {
  cursor: pointer;
}
.login_option > button:focus {
  border-bottom: 3px solid red;
}
.login_option {
  margin-top: 20px;
  width: 100%;
}
</style>