import { Module, createStore } from "vuex";
import { RootState } from "../index";
import { boardState as state } from "./state";
import actions from "./actions";
import mutations from "./mutations";
import {Board} from "@/types/board/Board"

export const boardModule: Module<state, RootState> = {
    namespaced: true,
    state: () => ({
      board: { title: "", contents: "" },
    }),
    actions: actions,
    mutations: mutations,
  };
  
const initialBoard = {
     title:"", contents:""
}