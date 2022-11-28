import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetchPopularRepo} from "../api";


export const getPopular = createAsyncThunk(
    "popular/getReposByLanguage",
    async ({selectedLang}) => {
        const repos = await fetchPopularRepo(selectedLang);
        return repos;
    }
)


const initialState = {
    selectedLang: "All",
    repos: [],
    isLoading: false,
    error: null
}

const popularSlice = createSlice({
    name: "popular",
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.selectedLang = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPopular.pending, (state, action) => {
            state.repos = [];
            state.isLoading = true;
        })
            .addCase(getPopular.fulfilled, (state, action) => {
                state.isLoading = false;
                state.repos = action.payload;
                state.error = null;
            })
            .addCase(getPopular.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
})

export const {setLanguage} = popularSlice.actions;
export default popularSlice.reducer;