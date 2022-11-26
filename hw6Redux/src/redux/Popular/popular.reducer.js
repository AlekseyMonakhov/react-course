import {
    GET_REPOS_FAILURE,
    GET_REPOS_LOADING,
    GET_REPOS_SUCCESS,
    SET_LANGUAGE
} from "./popular.constanst";


const initialState = {
    selectedLang: "All",
    repos: [],
    isLoading: false,
    error: null
}


export const popularReducer = (store = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return {
                ...store,
                selectedLang: action.payload
            }
        case GET_REPOS_LOADING:
            return {
                ...store,
                repos: [],
                isLoading: true
            }
        case GET_REPOS_SUCCESS:
            return {
                ...store,
                isLoading: false,
                repos: action.payload,
                error: null
            }
        case GET_REPOS_FAILURE:
            return {
                ...store,
                isLoading: false,
                error: action.payload
            }
        default:
            return store;
    }
}