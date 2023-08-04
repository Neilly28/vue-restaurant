<template>
  <h1>LOGO</h1>
  <h1>Sign Up Here</h1>
  <div>
    <input type="text" v-model="name" placeholder="John Doe" />
    <input type="email" v-model="email" placeholder="johndoe@email.com" />
    <input type="password" v-model="password" placeholder="ilovedonuts" />
    <button @click="signUp">Sign Up</button>
  </div>
  <div>
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const name = ref("");
const email = ref("");
const password = ref("");
const router = useRouter();

async function signUp() {
  try {
    const response = await axios.post("http://localhost:3000/users", {
      email: email.value,
      password: password.value,
      name: name.value,
    });
    console.log({ response });

    if (response.status === 201) {
      localStorage.setItem("user", JSON.stringify(response.data));
      router.push({ name: "HomePage" });
    } else {
      alert("Sign up failed! Please try again later.");
    }
  } catch (error) {
    alert("An error occured. Please try again later.");
    console.log(error);
  }
}

onMounted(() => {
  const user = localStorage.getItem("user");
  if (user) {
    router.push({ name: "HomePage" });
  }
});
</script>

<style lang="scss" scoped></style>
