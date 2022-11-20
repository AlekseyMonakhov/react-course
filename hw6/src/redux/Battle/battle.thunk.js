import {
    playerOneLoaded, playerTwoLoaded,
    setPlayerOne,
    setPlayerOneError,
    setPlayerOneLoading,
    setPlayerTwo,
    setPlayerTwoError,
    setPlayerTwoLoading
} from "./battle.actions";
import {getRepos, getUser} from "../../api";

export const setUser = (userName, id) => async (dispatch) => {
    try {
        const user = await getUser(userName);
        const userRepos = await getRepos(userName);
        const stargazers_count = userRepos.reduce((prev, cur) => prev + cur.stargazers_count, 0)
        if (id === "first") {
            dispatch(setPlayerOneLoading())
            dispatch(setPlayerOne({
                userName,
                avatar: user.avatar_url,
                score: user.followers + stargazers_count
            }))
        } else {
            dispatch(setPlayerTwoLoading())
            dispatch(setPlayerTwo({
                userName,
                avatar: user.avatar_url,
                score: user.followers + stargazers_count
            }))
        }
    } catch (err) {
        if (id === "first") {
            dispatch(setPlayerOneError(err))
        } else {
            dispatch(setPlayerTwoError(err))
        }
    }finally {
        if(id === "first") {
            dispatch(playerOneLoaded())
        }else {
            dispatch(playerTwoLoaded())
        }
    }
}