<template>
  <nav v-if="authIsReady">
    <div class="flex items-center justify-between mt-12 mb-24 font-bold">
      <!-- LOGO -->
      <router-link to="/"
        ><img class="w-56" src="logo.png" alt="logo"
      /></router-link>

      <!-- FOR ALL USERS -->
      <router-link
        class="hover:text-cyan-400 transition-all ease-in"
        to="/signup-teacher"
        >Become A Teacher</router-link
      >

      <!-- FOR LOGGED IN USERS -->
      <div v-if="user">
        <router-link to="/user">Hello, {{ user.email }}</router-link>
      </div>

      <div v-if="user">
        <button @click="handleClick">Logout</button>
      </div>

      <!-- FOR LOGGED OUT USERS -->
      <div v-if="!user">
        <router-link to="/login">Login</router-link>
        <router-link to="/signup">Sign Up</router-link>
      </div>

      <!-- GitHub -->
      <a
        class="flex items-center justify-center gap-2 hover:text-cyan-400 transition-all ease-in"
        href="https://github.com/Neilly28/vue-restaurant"
        target="_blank"
        >GitHub<svg-icon type="mdi" :path="path"
      /></a>
    </div>
  </nav>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiGithub } from "@mdi/js";
import { ref, computed } from "vue";
import { useStore } from "vuex";
const path = ref(mdiGithub);

const store = useStore();

const handleClick = () => {
  store.dispatch("logout");
};
const user = computed(() => store.state.user);
const authIsReady = computed(() => store.state.authIsReady);
</script>
