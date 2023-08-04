<template>
  <div>
    <h1>Welcome to Login Page</h1>
    <div>
      <input type="email" v-model="email" placeholder="johndoe@email.com" />
      <input type="password" v-model="password" placeholder="ilovedonuts" />
      <button @click="handleLogin">Login</button>
    </div>
    <div>
      <router-link to="/signup">Sign Up</router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

import axios from "axios";

const email = ref("");
const password = ref("");
const router = useRouter();

const handleLogin = async () => {
  const response = await axios.get(
    `http://localhost:3000/users?email=${email.value}&password=${password.value}`
  );
  if (response.status === 200 && response.data.length > 0) {
    localStorage.setItem("user", JSON.stringify(response.data[0]));
    router.push({ name: "HomePage" });
  } else {
    alert("Sign up failed! Please try again later.");
  }
  console.log(response);
};

onMounted(() => {
  const user = localStorage.getItem("user");
  if (user) {
    router.push({ name: "HomePage" });
  }
});
</script>

<style lang="scss" scoped></style>
