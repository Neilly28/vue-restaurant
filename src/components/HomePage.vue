<template>
  <div>
    <h1 class="text-5xl font-bold mt-12 mb-8">
      Start learning with one of our top teachers!
    </h1>
    <p class="text-lg mb-24">
      There isn't a single way to teach a language. Book a regular lesson or a
      trial lessons to get an introduction to a teacher's style. We have
      teachers who specialize in teaching the foundations of German all the way
      to advanced topics.
    </p>
    <div class="grid grid-cols-3 gap-12 mt-12">
      <div
        class="flex flex-col gap-2 items-center justify-center shadow-md p-6 text-center"
        v-for="teacher in teachers"
        :key="teacher.id"
      >
        <img class="rounded-full w-24" :src="teacher.image" alt="" />
        <h2 class="text-2xl font-bold">{{ teacher.name }}</h2>
        <h4>{{ teacher.language }}</h4>
        <p>{{ teacher.description }}</p>
        <h3 class="font-bold text-xl">EUR {{ teacher.price.toFixed(2) }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();

const teachers = ref([]);
const headshots = ref([]);

// const userName = computed(() => {
//   const user = localStorage.getItem("user");
//   return user ? JSON.parse(user).name : "Guest";
// });

onMounted(async () => {
  try {
    // fetch user from local storage
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/signup");
    }

    // fetch teachers
    const response = await axios.get("http://localhost:3000/teachers");
    teachers.value = response.data;

    // sort teachers by id
    teachers.value.sort((a, b) => (a.id < b.id ? 1 : -1));
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  // fetch headshots
  const response = await axios.get("https://randomuser.me/api/?results=20");

  headshots.value = response.data.results;
  console.log(headshots.value);
});
</script>
