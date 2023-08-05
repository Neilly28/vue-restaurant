<template>
  <form @submit.prevent="handleSubmit">
    <h1>Login Here</h1>
    <div class="flex flex-col items-center justify-center">
      <div>
        <label for="">email</label>
        <input
          class="bg-slate-100 px-4 py-2 rounded-full cursor-pointer"
          type="email"
          name="email"
          v-model="email"
          required
        />
      </div>
      <div>
        <label for="">password</label>
        <input
          class="bg-slate-100 px-4 py-2 rounded-full cursor-pointer"
          type="password"
          name="password"
          v-model="password"
          required
        />
      </div>
      <button>Login</button>
    </div>
  </form>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

const handleSubmit = () => {
  console.log(email.value, password.value);
};
</script>
