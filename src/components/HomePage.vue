<template>
  <h1>Start learning with one of our top teachers!</h1>
  <p>
    There isn't a single way to teach a language. Book a regular lesson or a
    trial lessons to get an introduction to a teacher's style. We have teachers
    who specialize in teaching the foundations of German all the way to advanced
    topics.
  </p>
  <div class="grid">
    <div v-for="teacher in teachers" :key="teacher.id">
      <img :src="teacher.image" alt="" />
      <h2>{{ teacher.name }}</h2>
      <h4>{{ teacher.language }}</h4>
      <p>{{ teacher.description }}</p>
      <h3>EUR {{ teacher.price.toFixed(2) }}</h3>
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

<style lang="scss" scoped>
p {
  font-size: 14px;
  margin-bottom: 48px;
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.075);
    padding: 12px;

    img {
      border-radius: 99px;
      width: 72px;
    }

    p {
      font-size: 14px;
    }
  }
}
</style>
