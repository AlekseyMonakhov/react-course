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

const initialState = {
    playerOne: {
        login: "",
        avatar: "",
        score: null,
        error: null,
        isLoading: false
    },
    playerTwo: {
        login: "",
        avatar: "",
        score: null,
        error: null,
        isLoading: false
    },
}


export const battleReducer = (store = initialState, action) => {
    switch (action.type) {

        case SET_PLAYER_ONE:
            return {
                ...store,
                playerOne: {
                    ...store.playerOne,
                    login: action.payload.userName,
                    avatar: action.payload.avatar,
                    score: action.payload.score,
                    error: null
                }
            }

        case SET_PLAYER_ONE_LOADING:
            return {
                ...store,
                playerOne: {
                    ...store.playerOne,
                    isLoading: true
                }
            }
        case SET_PLAYER_ONE_ERROR:
            return {
                ...store,
                playerOne: {
                    ...store.playerOne,
                    error: action.payload,
                    isLoading: false
                }
            }
        case PLAYER_ONE_RESET:
            return {
                ...store,
                playerOne: {
                    login: "",
                    avatar: "",
                    followers: 0,
                    score: null,
                    error: null,
                    isLoading: false
                }
            }
        case PLAYER_ONE_LOADED:
            return {
                ...store,
                playerOne: {
                    ...store.playerOne,
                    isLoading: false
                }
            }
        case SET_PLAYER_TWO:
            return {
                ...store,
                playerTwo: {
                    ...store.playerTwo,
                    login: action.payload.userName,
                    avatar: action.payload.avatar,
                    score: action.payload.score,
                    error: null
                }
            }

        case SET_PLAYER_TWO_LOADING:
            return {
                ...store,
                playerTwo: {
                    ...store.playerTwo,
                    isLoading: true
                }
            }
        case SET_PLAYER_TWO_ERROR:
            return {
                ...store,
                playerTwo: {
                    ...store.playerTwo,
                    error: action.payload,
                    isLoading: false
                }
            }
        case PLAYER_TWO_RESET:
            return {
                ...store,
                playerTwo: {
                    login: "",
                    avatar: "",
                    followers: 0,
                    score: null,
                    error: null,
                    isLoading: false
                }
            }
        case PLAYER_TWO_LOADED:
            return {
                ...store,
                playerTwo: {
                    ...store.playerTwo,
                    isLoading: false
                }
            }
        default:
            return store
    }
}