<template>
  <div class="flex items-center justify-evenly mt-12 mb-24 font-bold">
    <router-link to="/"
      ><img class="w-72" src="logo.png" alt="logo"
    /></router-link>
    <router-link class="hover:text-cyan-400 transition-all ease-in" to="/add"
      >Become A Teacher</router-link
    >
    <a
      class="hover:text-cyan-400 transition-all ease-in"
      href="/"
      @click="handleLogout"
      >Logout</a
    >
    <a
      class="flex items-center justify-center gap-2 hover:text-cyan-400 transition-all ease-in"
      href="https://github.com/Neilly28/vue-restaurant"
      target="_blank"
      >GitHub<svg-icon type="mdi" :path="path"
    /></a>
  </div>
</template>

<script setup>
import router from "@/router/router";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiGithub } from "@mdi/js";
import { ref } from "vue";

const path = ref(mdiGithub);

const handleLogout = () => {
  console.log("loogiign out");
  localStorage.clear();
  router.push("/login");
};
</script>
