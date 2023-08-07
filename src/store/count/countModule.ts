import { Module } from "vuex";
import { countState as state } from "./state";
import { RootState } from "..";
import mutations from "./mutations";

export const countModule: Module<state, RootState> = {
    namespaced: true,
    state: () => ({
      count: initialCount
    }),
    mutations: mutations,
  };
  
const initialCount = 0