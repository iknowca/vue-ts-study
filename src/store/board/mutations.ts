import { Board } from "@/types/board/Board"
import { boardState } from "./state"

export default {
    SET_BOARD(state:boardState, board:Board) {
        state.board = board
    }
}