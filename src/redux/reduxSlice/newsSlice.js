import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';


export const getNewsSlice = createAsyncThunk("categories/getCategories", async (id,{rejectWithValue, dispatch}) => {
    const response = await axios.get(`https://testtask.sebbia.com/v1/news/categories/${id}/news`);
    console.log(response.data.list)
    dispatch(addNews(response.data.list))
   
  })


export const newsSlice = createSlice({
  name: 'news',
  initialState: {
    newsArray:[],
  },
  reducers: {
   addNews:(state, action)=>{
state.newsArray=action.payload;
   },

  },
  extraReducers:{
    [getNewsSlice.fulfilled]:()=>console.log('Fulfield'),
    [getNewsSlice.pending]:()=>console.log('pending'),
    [getNewsSlice.rejected]:()=>console.log('rejected')
  }
})


export const { addNews} = newsSlice.actions

export default newsSlice.reducer