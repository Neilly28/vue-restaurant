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
        class="flex flex-col items-center justify-evenly shadow-md p-6 text-center rounded-3xl"
        v-for="teacher in teachers"
        :key="teacher.id"
      >
        <div>
          <div class="flex items-center justify-evenly mb-2">
            <img class="rounded-full w-24" :src="teacher.image" alt="" />
            <div class="text-left flex flex-col gap-1">
              <h2 class="text-2xl font-bold">{{ teacher.name }}</h2>
              <p class="text-slate-400">
                {{
                  teacher.professional
                    ? "Professional Teacher"
                    : "Community Tutor"
                }}
              </p>
              <div class="mb-4">
                <span
                  class="border-transparent px-2 py-1 rounded-3xl text-xs font-semibold text-cyan-800 bg-cyan-200"
                  >{{ teacher.language }}</span
                >
              </div>
            </div>
          </div>

          <div class="mb-4">
            <p class="text-sm text-left">{{ teacher.description }}</p>
          </div>
          <div>
            <p class="text-sm text-left text-slate-400">Trial from</p>

            <h3 class="font-bold text-xl text-left">
              EUR {{ teacher.price.toFixed(2) }}
            </h3>
          </div>
        </div>
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
    // teachers.value.sort((a, b) => (a.id < b.id ? 1 : -1));
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  // fetch headshots
  const response = await axios.get("https://randomuser.me/api/?results=20");

  headshots.value = response.data.results;
  console.log(headshots.value);
});
</script>
