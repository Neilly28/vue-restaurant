<template>
  <div>
    <div
      class="group cursor-pointer flex flex-col items-start justify-around gap-6 shadow-md p-12 rounded-3xl bg-white max-w-2xl m-auto"
    >
      <!-- PROFILE SECTION -->
      <div class="flex gap-6">
        <div class="flex flex-col justify-center items-center gap-2">
          <img class="rounded-full w-24" :src="teacher.image" alt="" />
          <p class="text-sm text-slate-400">Visited a day ago</p>
        </div>
        <div class="text-left flex flex-col items-start justify-center">
          <h2 class="text-2xl font-bold">{{ teacher.name }}</h2>
          <h2 class="text-sm text-slate-400">
            {{
              teacher.professional ? "Professional Teacher" : "Community Tutor"
            }}
          </h2>
          <span
            class="mt-2 border-transparent px-2 py-1 rounded-3xl text-xs font-semibold text-cyan-800 bg-cyan-200"
            >{{ teacher.language }}</span
          >
        </div>
      </div>
      <div>
        <p class="text-sm text-left">{{ teacher.description }}</p>
      </div>

      <!-- CTA SECTION -->
      <div class="flex items-center justify-evenly gap-4">
        <div>
          <p class="text-sm text-left text-slate-400">Trial from</p>
          <h3 class="font-bold text-xl text-left">
            EUR {{ teacher.price?.toFixed(2) }}
          </h3>
        </div>

        <button
          class="bg-red-500 text-white font-bold px-4 py-2 rounded-full cursor-pointer hover:bg-red-600 transition-all"
        >
          Book a class
        </button>
        <button
          class="bg-slate-200 text-slate-800 font-bold px-4 py-2 rounded-full cursor-pointer hover:bg-slate-300 transition-all"
        >
          Contact Teacher
        </button>
      </div>

      <!-- ABOUT SECTION -->
      <div>
        <h3 class="font-bold text-xl text-left">About Me</h3>
        <p>{{ teacher.about }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();
const teacher = ref({});

onMounted(async () => {
  try {
    // fetch teachers
    const response = await axios.get(
      `http://localhost:3000/teachers/${route.params.id}`
    );
    teacher.value = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
});
</script>

<style lang="scss" scoped></style>
