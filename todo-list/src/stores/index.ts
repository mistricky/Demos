import Vuex from "vuex";
import { state } from "./state";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { getters } from "./getters";
import Vue from "vue";

Vue.use(Vuex);
export const TodoListStore = new Vuex.Store({
  state,
  actions,
  mutations,
  getters
});

// export types
export * from "./actions";
export * from "./getters";
export * from "./mutations";
export * from "./state";
