import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const getDetailsNewsSlice = createAsyncThunk("categories/getCategories", async (id,{rejectWithValue, dispatch}) => {
    const response = await axios.get(`https://testtask.sebbia.com/v1/news/details?id=${id}`);
    console.log(response.data.news)
    dispatch(addNewsDetails(response.data.news))
  })


export const newsDetailsSlice = createSlice({
  name: 'details',
  initialState: {
    newsDetailsArray:[],
  },
  reducers: {
addNewsDetails:(state, action)=>{
state.newsDetailsArray=action.payload;
   },

  },
  extraReducers:{
    [getDetailsNewsSlice.fulfilled]:()=>console.log('Fulfield'),
    [getDetailsNewsSlice.pending]:()=>console.log('pending'),
    [getDetailsNewsSlice.rejected]:()=>console.log('rejected')
  }
})


export const { addNewsDetails} = newsDetailsSlice.actions

export default newsDetailsSlice.reducer