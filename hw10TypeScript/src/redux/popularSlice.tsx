import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPopularRepo } from "../api";
import { PopularState, Repository } from "../types";

type getPopularProps = {
    selectedLang: string;
};

export const getPopular = createAsyncThunk(
    "popular/getReposByLanguage",
    async ({ selectedLang }: getPopularProps): Promise<Repository[]> => {
        const repos = await fetchPopularRepo(selectedLang);
        return repos;
    }
);

const initialState: PopularState = {
    selectedLang: "All",
    repos: [],
    isLoading: false,
    error: "",
};

const popularSlice = createSlice({
  name: "popular",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.selectedLang = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPopular.pending, (state, action) => {
        state.repos = [];
        state.isLoading = true;
      })
      .addCase(getPopular.fulfilled, (state, action) => {
        state.isLoading = false;
        state.repos = action.payload;
        state.error = "";
      })
      .addCase(getPopular.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Some error";
      });
  },
});

export const { setLanguage } = popularSlice.actions;
export default popularSlice.reducer;
