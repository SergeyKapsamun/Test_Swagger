import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { NavLink, Navigate, redirect } from "react-router-dom";

export const getDetailsNewsSlice = createAsyncThunk(
  "categories/getCategories",
  async (id, { rejectWithValue, dispatch }) => {
    const response = await axios.get(
      `https://testtask.sebbia.com/v1/news/details?id=${id}`
    );
   console.log(response.status)
if(response.data.code===0){
  dispatch(error(false))
  dispatch(addNewsDetails(response.data.news));
} else{  
  dispatch(error(true))
}
  
   
  }
);
const initialState = {
  newsDetails: [],
  isNewsDetails: false,
  errorReques:false,
};
export const newsDetailsSlice = createSlice({
  name: "details",
  initialState: initialState,
  reducers: {
    addNewsDetails: (state, action) => {
      state.newsDetails = action.payload;
    },
    error:(state, action)=>{
      state.errorReques=action.payload;
    }
  },
  extraReducers: {
    [getDetailsNewsSlice.fulfilled]: (state) => {
      state.isNewsDetails = true;
    },
    [getDetailsNewsSlice.pending]: (state) => {
      state.isNewsDetails = false;
    },
    [getDetailsNewsSlice.rejected]: () => {
    error(true)
    
    },
  },
});

export const { addNewsDetails,error } = newsDetailsSlice.actions;

export default newsDetailsSlice.reducer;
