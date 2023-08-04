<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <router-link to="/update">Update Restaurant</router-link>
    <a href="/" @click="handleLogout">Logout</a>
  </div>
</template>

<script setup>
import router from "@/router/router";

const handleLogout = () => {
  console.log("loogiign out");
  localStorage.clear();
  router.push("/login");
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  a {
    text-decoration: none;
    color: black;

    &:hover {
      color: red;
    }
  }
}
</style>
