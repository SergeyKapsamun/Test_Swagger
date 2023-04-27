import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { NavLink, Navigate, redirect } from "react-router-dom";

export const getDetailsNewsSlice = createAsyncThunk(
  "categories/getCategories",
  async (id, { rejectWithValue, dispatch }) => {
    const response = await axios.get(
      `https://testtask.sebbia.com/v1/news/details?id=${id}`
    );
    if (response.data.news == undefined) {
      console.log(response.data.news);
      <Navigate to="/" />;
    }
    console.log(response.data);
    // dispatch(addNewsDetails(response.data.news));
  }
);
const initialState = {
  newsDetails: [],
  isNewsDetails: false,
};
export const newsDetailsSlice = createSlice({
  name: "details",
  initialState: initialState,
  reducers: {
    addNewsDetails: (state, action) => {
      state.newsDetails = action.payload;
    },
  },
  extraReducers: {
    [getDetailsNewsSlice.fulfilled]: (state) => {
      state.isNewsDetails = true;
    },
    [getDetailsNewsSlice.pending]: (state) => {
      state.isNewsDetails = false;
    },
    [getDetailsNewsSlice.rejected]: () => {
      console.log("lox");
      redirect("/");
    },
  },
});

export const { addNewsDetails } = newsDetailsSlice.actions;

export default newsDetailsSlice.reducer;
