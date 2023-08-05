import DefaultLayout from "@/components/DefaultLayout.vue";
import Home from "../views/Home.vue";
import SignUp from "../views/SignUp.vue";
import Login from "../views/Login.vue";
import SignUpTeacher from "../views/SignUpTeacher.vue";
import UserProfile from "../views/UserProfile.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "Home",
        component: Home,
      },
      {
        path: "/signup",
        name: "SignUp",
        component: SignUp,
      },
      {
        path: "/login",
        name: "Login",
        component: Login,
      },
      {
        path: "/signup-teacher",
        name: "SignUpTeacher",
        component: SignUpTeacher,
      },
      {
        path: "/user",
        name: "UserProfile",
        component: UserProfile,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
