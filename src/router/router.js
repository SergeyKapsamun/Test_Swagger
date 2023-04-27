import { createBrowserRouter } from "react-router-dom";
import Categories from "../component/categories/Categories";
import { News } from "../component/news/News";
import DetailsNews from "../component/detailsNews/DetailsNews";
import { ErrorPage } from "../component/ErrorPage/ErrorPage";
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
  },
]);
export default router;
