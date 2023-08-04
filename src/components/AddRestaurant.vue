<template>
  <div>
    <h1>Do you want to become a teacher on vue-lang?</h1>
    <p>
      Complete the teacher application below. Once you are accepted, students
      will be able to find you.
    </p>

    <form @submit.prevent="handleSubmit">
      <div>
        <div class="name">
          <div>
            <label for="">Name</label>
            <input
              type="text"
              required
              placeholder="John Doe"
              v-model="teacher.name"
            />
          </div>
          <div>
            <label for="">E-mail</label>
            <input
              type="email"
              required
              placeholder="johndoe@email.com"
              v-model="teacher.address"
            />
          </div>
        </div>

        <div class="description">
          <label for="">Say something</label>
          <textarea
            type="text"
            placeholder="i love teaching languages!"
            v-model="teacher.description"
          />
        </div>

        <div class="rate">
          <div>
            <label for="">Hourly rate in EUR</label>
            <input
              class="price"
              type="number"
              required
              placeholder="9.99"
              v-model="teacher.price"
            />
          </div>
          <div>
            <label for="">Teaching Language</label>
            <select required name="" id="" v-model="teacher.language">
              <option value="">I will teach...</option>
              <option value="German">German</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>
        </div>
      </div>

      <button>Submit Application</button>
      <h1>{{ teacher.name }}</h1>
      <h1>{{ teacher.address }}</h1>
      <h1>{{ teacher.description }}</h1>
      <h1>{{ teacher.language }}</h1>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import router from "@/router/router";

const teacher = ref({
  name: "",
  email: "",
  description: "",
  language: "",
  price: "",
});

const handleSubmit = async () => {
  try {
    const response = await axios.post("http://localhost:3000/teachers", {
      name: teacher.value.name,
      description: teacher.value.description,
      language: teacher.value.language,
      price: teacher.value.price,
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

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;

  .name {
    display: flex;
    flex-direction: row;
  }

  .description {
    width: 100%;

    textarea {
      height: 100px;
      width: 100%;
      font-size: 20px;
      padding: 12px;
      font-size: 20px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 20px;
    font-size: 24px;

    label {
      font-weight: 600;
    }

    input {
      height: 24px;
      padding: 12px;
      font-size: 20px;
    }

    .rate {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    }

    .price {
      width: 25%;
    }

    select {
      width: 200px;
      height: 50px;
      font-size: 16px;

      option {
        font-size: 24px;
      }
    }
  }
}
</style>
