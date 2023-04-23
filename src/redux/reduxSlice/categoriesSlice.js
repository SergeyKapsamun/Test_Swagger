import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const getCategories = createAsyncThunk("categories/getCategories", async (_,{rejectWithValue, dispatch}) => {
    const response = await axios.get('https://testtask.sebbia.com/v1/news/categories');
    console.log(response.data.list)
    dispatch(addCategories(response.data.list))
   
  })


export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categoriesArray:[1,2]
  },
  reducers: {
   addCategories:(state, action)=>{
state.categoriesArray=action.payload;
   }
  },
  extraReducers:{
    [getCategories.fulfilled]:()=>console.log('Fulfield'),
    [getCategories.pending]:()=>console.log('pending'),
    [getCategories.rejected]:()=>console.log('rejected')
  }
})


export const { addCategories} = categoriesSlice.actions

export default categoriesSlice.reducer