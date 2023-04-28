import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNewsSlice = createAsyncThunk(
  "categories/getCategories",
  async (id, { rejectWithValue, dispatch }) => {
    const response = await axios.get(
      `https://testtask.sebbia.com/v1/news/categories/${id}/news`
    );
    dispatch(addNews(response.data.list));
    console.log(response.data)
  }
);
const initialState = {
  news: [],
  isNews: false,
};
export const newsSlice = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    addNews: (state, action) => {
      state.news = action.payload;
    },
  },
  extraReducers: {
    [getNewsSlice.fulfilled]: (state) => {
      state.isNews = false;
    },
    [getNewsSlice.pending]: (state) => {
      state.isNews = true;
    },
    [getNewsSlice.rejected]: () => console.log("rejected"),
  },
});

export const { addNews } = newsSlice.actions;

export default newsSlice.reducer;
