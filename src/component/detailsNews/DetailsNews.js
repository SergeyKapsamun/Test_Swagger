import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailsNewsSlice } from "../../redux/reduxSlice/detailsNewsSlice";
const DetailsNews = () => {
  const { newsDetails, isNewsDetails } = useSelector(
    (state) => state.detailsNews
  );
  const dispatch = useDispatch();
  const { idDetails } = useParams();
  useEffect(() => {
    if (idDetails) {
      dispatch(getDetailsNewsSlice(idDetails));
    }
    console.log(idDetails);
  }, [idDetails]);

  return (
    <>
      {isNewsDetails ? (
        <div>
          <p>title: {newsDetails.title}</p>
          <div
            dangerouslySetInnerHTML={{ __html: newsDetails.fullDescription }}
          />
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default DetailsNews;
