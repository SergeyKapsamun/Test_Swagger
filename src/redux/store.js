import { configureStore } from "@reduxjs/toolkit";
import newsSlice from "./reduxSlice/newsSlice";
import detailsNewsSlice from "./reduxSlice/detailsNewsSlice";
import categoriesSlice from "./reduxSlice/categoriesSlice";

export default configureStore({
  reducer: {
    news: newsSlice,
    detailsNews: detailsNewsSlice,
    categories: categoriesSlice,
  },
});
