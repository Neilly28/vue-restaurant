<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold mt-12 mb-4">
      Hello!!!{{ user.email }}, start learning today 🥳
    </h1>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const user = computed(() => store.state.user);
</script>
