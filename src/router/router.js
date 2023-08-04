import HomePage from "@/components/HomePage.vue";
import SignUp from "@/components/SignUp.vue";
import LoginPage from "@/components/LoginPage.vue";
import AddResturant from "@/components/AddRestaurant.vue";
import UpdateRestaurant from "@/components/UpdateRestaurant.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/login",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/add",
    name: "AddResturant",
    component: AddResturant,
  },
  {
    path: "/update",
    name: "UpdateRestaurant",
    component: UpdateRestaurant,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
