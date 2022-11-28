import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getRepos, getUser} from "../api";


export const setUser = createAsyncThunk(
    "battle/setUser",
    async ({userName, id}, thunkAPI) => {
        const user = await getUser(userName);
        const userRepos = await getRepos(userName);
        const stargazers_count = userRepos.reduce((prev, cur) => prev + cur.stargazers_count, 0)

        return {
            id,
            userName,
            avatar: user.avatar_url,
            score: user.followers + stargazers_count
        }
    }
)


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
                        score: null,
                        error: null,
                        isLoading: false
                    }
                    break;
                default:
                    state.playerOne = {
                        login: "",
                        avatar: "",
                        score: null,
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
    }
})

export const {playerReset} = battleSlice.actions;
export default battleSlice.reducer;