import { configureStore } from '@reduxjs/toolkit'
import newsSlice from './reduxSlice/newsSlice'
import detailsNewsSlice from './reduxSlice/detailsNewsSlice'


export default configureStore({
  reducer: {
    news:newsSlice,
    detailsNews:detailsNewsSlice,
  },
  
})

