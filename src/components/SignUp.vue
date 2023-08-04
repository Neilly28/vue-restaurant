<template>
  <h1>LOGO</h1>
  <h1>Sign Up Here</h1>
  <div>
    <input type="text" v-model="name" placeholder="John Doe" />
    <input type="email" v-model="email" placeholder="johndoe@email.com" />
    <input type="password" v-model="password" placeholder="ilovedonuts" />
    <button @click="signUp">Sign Up</button>
  </div>
</template>

<script>
import { ref } from "vue";
import axios from "axios";

export default {
  name: "SignUp",
  setup() {
    const name = ref("");
    const email = ref("");
    const password = ref("");

    async function signUp() {
      try {
        const response = await axios.post("http://localhost:3000/users", {
          email: email.value,
          password: password.value,
          name: name.value,
        });

        if (response.status === 201) {
          alert("You are signed up!");
          localStorage.setItem("user", JSON.stringify(response.data));
        } else {
          alert("Sign up failed! Please try again later.");
        }
      } catch (error) {
        alert("An error occured. Please try again later.");
        console.log(error);
      }
    }

    return { name, email, password, signUp };
  },
};
</script>

<style lang="scss" scoped></style>
