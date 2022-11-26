import {
    PLAYER_ONE_LOADED,
    PLAYER_ONE_RESET, PLAYER_TWO_LOADED,
    PLAYER_TWO_RESET,
    SET_PLAYER_ONE,
    SET_PLAYER_ONE_ERROR,
    SET_PLAYER_ONE_LOADING,
    SET_PLAYER_TWO,
    SET_PLAYER_TWO_ERROR,
    SET_PLAYER_TWO_LOADING
} from "./battle.constants";

export const setPlayerOne = (payload) => ({
    type: SET_PLAYER_ONE,
    payload
})


export const setPlayerOneLoading = () => ({
    type: SET_PLAYER_ONE_LOADING
})

export const setPlayerOneError = (payload) => ({
    type: SET_PLAYER_ONE_ERROR,
    payload
})

export const resetPlayerOne = () => ({
    type: PLAYER_ONE_RESET,
})

export const playerOneLoaded = () => ({
    type: PLAYER_ONE_LOADED,
})

export const setPlayerTwo = (payload) => ({
    type: SET_PLAYER_TWO,
    payload
})

export const setPlayerTwoLoading = () => ({
    type: SET_PLAYER_TWO_LOADING
})

export const setPlayerTwoError = (payload) => ({
    type: SET_PLAYER_TWO_ERROR,
    payload
})

export const resetPlayerTwo = () => ({
    type: PLAYER_TWO_RESET,
})
export const playerTwoLoaded = () => ({
    type: PLAYER_TWO_LOADED,
})