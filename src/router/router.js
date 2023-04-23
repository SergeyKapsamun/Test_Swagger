import {createBrowserRouter } from "react-router-dom";
import Categories from '../component/categories/Categories';
import { News } from '../component/news/News';
import DetailsNews from '../component/detailsNews/DetailsNews';
const router = createBrowserRouter(
    [
    {
      path:'/',
      element: <Categories/>,
      children:[{
        path:'/:id/news',
        element:<News/>
      },
      {
        path:'/:id/news/details/:id',
        element:<DetailsNews/>
      }]
    },
    
  ]
    
  );
  export default router;