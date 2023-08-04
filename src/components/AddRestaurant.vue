<template>
  <div>
    <h1>Add Resturant View</h1>
    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        placeholder="My Restaurant Name"
        v-model="restaurant.name"
      />
      <input
        type="text"
        placeholder="123 Boulevard"
        v-model="restaurant.address"
      />
      <input
        type="text"
        placeholder="123-456-7890"
        v-model="restaurant.contact"
      />
      <button>Add New Restaurant</button>
    </form>
    <h1>{{ restaurant.name }}</h1>
    <h1>{{ restaurant.address }}</h1>
    <h1>{{ restaurant.contact }}</h1>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import router from "@/router/router";

const restaurant = ref({
  name: "",
  address: "",
  contact: "",
});

const handleSubmit = async () => {
  try {
    const response = await axios.post("http://localhost:3000/restaurants", {
      name: restaurant.value.name,
      address: restaurant.value.address,
      contact: restaurant.value.contact,
    });
    console.log({ response });
    if (response.status === 201) {
      router.push("/");
    }
  } catch (error) {
    console.error("Error adding restaurant:", error);
  }
};
</script>

<style lang="scss" scoped></style>
