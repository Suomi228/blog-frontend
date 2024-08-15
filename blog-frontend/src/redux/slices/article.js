import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios.js";


export const fetchArticle = createAsyncThunk('/articles/fetchArticles', async()=>{
  const {data} = await axios.get('/articles');
  return data;
})
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
    },
});
export const articleReducer = articleSlice.reducer;