<template>
  <div
    class="bg-[url('../public/background.png')] bg-repeat-space bg-right-bottom"
  >
    <HeaderView />
    <router-view />
  </div>
</template>

<script setup>
import HeaderView from "./components/HeaderView.vue";
</script>
