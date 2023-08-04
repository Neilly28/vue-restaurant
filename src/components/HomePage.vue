<template>
  <div>
    <HeaderView />

    <h1>Welcome Homess!</h1>
  </div>
</template>

<script setup>
import HeaderView from "./HeaderView.vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

onMounted(() => {
  const user = localStorage.getItem("user");
  if (!user) {
    router.push("/signup");
  }
});
</script>

<style lang="scss" scoped></style>
