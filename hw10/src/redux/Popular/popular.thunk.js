import {getReposFailure, getReposLoading, getReposSuccess} from "./popular.actions";
import {fetchPopularRepo} from "../../api";

export const getRepos = (language) => async (dispatch, getState) => {
    await dispatch(getReposLoading());

    try {
        const repos = await fetchPopularRepo(language)
        if (repos.length) {
            dispatch(getReposSuccess(repos))
        }
    } catch (error) {
        dispatch(getReposFailure(error))
    }
}