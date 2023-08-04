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

    <div class="flex flex-col items-center justify-center gap-4">
      <input
        class="bg-slate-100 px-4 py-2 rounded-full"
        type="text"
        placeholder="Find your teacher..."
        v-model="searchTerm"
      />
      <h1>{{ searchTerm }}</h1>
      <div class="flex gap-4">
        <select
          class="bg-slate-100 px-4 py-2 rounded-full cursor-pointer"
          v-model="selectedLanguage"
        >
          <option value="">Choose Language</option>
          <option value="German">German</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>

        <select
          class="bg-slate-100 px-4 py-2 rounded-full cursor-pointer"
          v-model="selectedProfession"
        >
          <option value="">Choose Level</option>
          <option value="professional">Professional Teacher</option>
          <option value="tutor">Community Tutor</option>
        </select>
      </div>
    </div>

    <div v-if="filteredTeachers.length === 0" class="mt-12">
      <h1 class="text-4xl text-center font-bold">Oops, no teachers found 🥲</h1>
    </div>

    <div class="grid grid-cols-3 gap-12 mt-12">
      <div
        class="flex flex-col items-center justify-evenly shadow-md px-6 pt-12 pb-6 text-center rounded-3xl"
        v-for="teacher in filteredTeachers"
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
import { onMounted, ref, computed } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();

const teachers = ref([]);
const selectedLanguage = ref("");
const selectedProfession = ref("");
const searchTerm = ref("");

// language and professional filter
const filteredTeachers = computed(() => {
  if (
    !selectedLanguage.value &&
    !selectedProfession.value &&
    !searchTerm.value
  ) {
    return teachers.value;
  } else {
    return teachers.value.filter((teacher) => {
      const languageMatch =
        !selectedLanguage.value || teacher.language === selectedLanguage.value;
      const professionMatch =
        !selectedProfession.value ||
        (teacher.professional && selectedProfession.value === "professional") ||
        (!teacher.professional && selectedProfession.value === "tutor");
      const searchMatch =
        teacher.name
          .replace(/\s+/g, "")
          .toLowerCase()
          .includes(searchTerm.value.replace(/\s+/g, "").toLowerCase()) ||
        teacher.description
          .replace(/\s+/g, "")
          .toLowerCase()
          .includes(searchTerm.value.replace(/\s+/g, "").toLowerCase());

      return languageMatch && professionMatch && searchMatch;
    });
  }
});

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
});
</script>
