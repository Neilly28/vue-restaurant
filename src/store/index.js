import { createStore } from "vuex";

// firebase imports
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";

const store = createStore({
  // your initial state
  state: {
    user: null,
  },

  //   mutations are needed to update state
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      console.log("user state changed:", state.user);
    },
  },

  // actions are needed for async?
  actions: {
    async signup(context, { email, password }) {
      console.log("signup action run!");

      // async code
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (response) {
        context.commit("setUser", response.user);
      } else {
        throw new Error("Could not complete signup!");
      }
    },
  },
});

// export store
export default store;
