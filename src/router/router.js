import { createBrowserRouter } from "react-router-dom";
import Categories from "../component/Categories/Categories";
import { News } from "../component/News/News";
import DetailsNews from "../component/DetailsNews/DetailsNews";
import  ErrorPage  from "../component/ErrorPage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Categories />,
    errorElement: <ErrorPage />,
    children: [
    
  
      {
        path: "/:idNews/news",
        element: <News />,
      },
      {
        path: "/:id/news/details/:idDetails", 
        element: <DetailsNews />,
        errorElement: <ErrorPage />,
      },
    ],
    
  },  {
         path: '/error',
    element:<ErrorPage/>
      },

]);
export default router;
