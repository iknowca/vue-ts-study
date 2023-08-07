import { createStore } from 'vuex'
import { boardModule } from './board/boardModule'
import { countModule } from './count/countModule'
import { countState } from "./count/state"
import { boardState } from "./board/state"

export interface RootState {
  boardModule: boardState;
  countModule: countState
}

export default createStore({
  modules: {
    boardModule, countModule
  }
})
