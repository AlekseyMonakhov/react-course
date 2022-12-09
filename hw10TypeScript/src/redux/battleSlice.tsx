import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getRepos, getUser} from "../api";
import {BattleState, setUserProps, User} from "../types";




interface Repos {
    stargazers_count: number;
}

export const setUser = createAsyncThunk(
    "battle/setUser",
    async ({userName, id}:setUserProps, thunkAPI) => {
        const user = await getUser(userName);
        const userRepos = await getRepos(userName);
        const stargazers_count = userRepos.reduce((prev:number, cur:Repos) => prev + cur.stargazers_count, 0)

        return {
            id,
            userName,
            avatar: user.avatar_url,
            score: user.followers + stargazers_count
        }
    }
)


const initialState: BattleState<User> = {
    playerOne: {
        login: "",
        avatar: "",
        score: 0,
        error: null,
        isLoading: false
    },
    playerTwo: {
        login: "",
        avatar: "",
        score: 0,
        error: null,
        isLoading: false
    },
}

const battleSlice = createSlice({
    name: "battle",
    initialState,
    reducers: {
        playerReset: (state, action) => {
            switch (action.payload) {
                case "second" :
                    state.playerTwo = {
                        login: "",
                        avatar: "",
                        score: 0,
                        error: null,
                        isLoading: false
                    }
                    break;
                default:
                    state.playerOne = {
                        login: "",
                        avatar: "",
                        score: 0,
                        error: null,
                        isLoading: false
                    }
                    break;

            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setUser.pending, (state, action) => {
            switch (action.meta.arg.id) {
                case "second":
                    state.playerTwo.isLoading = true;
                    break;
                default:
                    state.playerOne.isLoading = true;
                    break;
            }

        })
            .addCase(setUser.fulfilled, (state, action) => {
                switch (action.payload.id) {
                    case "second":
                        state.playerTwo = {
                            login: action.payload.userName,
                            avatar: action.payload.avatar,
                            score: action.payload.score,
                            isLoading: false,
                            error: null
                        }
                        break;
                    default:
                        state.playerOne = {
                            login: action.payload.userName,
                            avatar: action.payload.avatar,
                            score: action.payload.score,
                            isLoading: false,
                            error: null
                        }
                        break;
                }
            })
            .addCase(setUser.rejected, (state, action) => {
                switch (action.meta.arg.id) {
                    case "first":
                        state.playerOne = {
                            login: "",
                            avatar: "",
                            score: 0,
                            isLoading: false,
                            error: action.error.message || "Some error",
                        }
                        break;
                    default:
                        state.playerTwo = {
                            login: "",
                            avatar: "",
                            score: 0,
                            isLoading: false,
                            error: action.error.message || "Some error",
                        }
                }
            })
    }
})

export const {playerReset} = battleSlice.actions;
export default battleSlice.reducer;