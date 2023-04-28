import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import ItemNews from "../ItemNews/ItemNews";
import { getNewsSlice } from "../../redux/reduxSlice/newsSlice";
export const News = () => {
  const { news, isNews } = useSelector((state) => state.news);
  const dispatch = useDispatch();
  const { idNews } = useParams();

  useEffect(() => {
    if (idNews) {
      dispatch(getNewsSlice(idNews));
    }
  }, [idNews]);

  return (
    <>
      <Outlet />
      {isNews ? <div>Load...</div> : ""}
      {news?.map((elemNew) => (
        <ItemNews
          key={elemNew.id}
          id={elemNew.id}
          title={elemNew.title}
          description={elemNew.shortDescription}
        />
      ))}
    </>
  );
};
