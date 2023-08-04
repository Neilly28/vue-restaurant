<template>
  <div>
    <h1>Hello {{ userName }}, Welcome Homess!</h1>
    <div v-for="restaurant in restaurants" :key="restaurant.id">
      <h1>{{ restaurant.name }}</h1>
      <p>{{ restaurant.contact }}</p>
      <p>{{ restaurant.address }}</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();

const restaurants = ref([]);

const userName = computed(() => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user).name : "Guest";
});

onMounted(async () => {
  try {
    // fetch user from local storage
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/signup");
    }

    // fetch restaurants
    const response = await axios.get("http://localhost:3000/restaurants");
    restaurants.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<style lang="scss" scoped></style>
