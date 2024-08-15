import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: {
    items: [],
    status: "loading",
  },
  tags: {
    items: [],
    status: "loading",
  },
};

const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducer: {
      fetchArticlesSuccess(state, action) {
        state.items = action.payload;
        state.status = "succeeded";
      },
      fetchArticlesError(state) {
        state.status = "failed";
      },
      fetchTagsSuccess(state, action) {
        state.tags.items = action.payload;
        state.tags.status = "succeeded";
      },
      fetchTagsError(state) {
        state.tags.status = "failed";
      },
    },
});
export const articleReducer = articleSlice.reducer;