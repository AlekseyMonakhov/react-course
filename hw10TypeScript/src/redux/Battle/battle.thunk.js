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
    switch (id) {
        case "first":
            try {
                dispatch(setPlayerOneLoading())
                const user = await getUser(userName);
                const userRepos = await getRepos(userName);
                const stargazers_count = userRepos.reduce((prev, cur) => prev + cur.stargazers_count, 0)

                dispatch(setPlayerOne({
                    userName,
                    avatar: user.avatar_url,
                    score: user.followers + stargazers_count
                }))
            }catch (err) {
                dispatch(setPlayerOneError(err))
            }finally {
                dispatch(playerOneLoaded())
            }
            break;
        default:
            try {
                dispatch(setPlayerTwoLoading())
                const user = await getUser(userName);
                const userRepos = await getRepos(userName);
                const stargazers_count = userRepos.reduce((prev, cur) => prev + cur.stargazers_count, 0)

                dispatch(setPlayerTwo({
                    userName,
                    avatar: user.avatar_url,
                    score: user.followers + stargazers_count
                }))
            }catch (err) {
                dispatch(setPlayerTwoError(err))
            }finally {
                dispatch(playerTwoLoaded())
            }
            break;
    }
}