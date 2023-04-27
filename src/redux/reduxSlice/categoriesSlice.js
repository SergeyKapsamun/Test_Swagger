import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export function getCategories() {
  return async (dispatch) => {
    dispatch(flagLoad(false));
    const response = await axios.get(
      `https://testtask.sebbia.com/v1/news/categories`
    );
    dispatch(addCategories(response.data.list));
    dispatch(flagLoad(true));
  };
}
const initialState = {
  categories: [],
  isCategories: false,
};

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: initialState,
  reducers: {
    addCategories: (state, action) => {
      state.categories = action.payload;
    },
    flagLoad: (state, action) => {
      state.isCategories = action.payload;
    },
  },
});

export const { addCategories, flagLoad } = categoriesSlice.actions;

export default categoriesSlice.reducer;
