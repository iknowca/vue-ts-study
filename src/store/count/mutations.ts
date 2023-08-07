import { countState } from "./state"

export default {
    SET_COUNT(state:countState, count:number) {
        state.count = count
    }
}