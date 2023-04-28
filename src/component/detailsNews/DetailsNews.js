import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useParams } from "react-router-dom";
import { getDetailsNewsSlice } from "../../redux/reduxSlice/detailsNewsSlice";
const DetailsNews = () => {
  const { newsDetails, isNewsDetails, errorReques } = useSelector(
    state => state.detailsNews
  );
  const dispatch = useDispatch();
  const { idDetails, id } = useParams();
  useEffect(() => {
    if (idDetails) {
      dispatch(getDetailsNewsSlice(idDetails));
    }
  
  }, [idDetails]);
  console.log(errorReques);
  return (
    <>
    {errorReques? <Navigate to='/error'/>:isNewsDetails ? (
        <div>
         
          <p>title: {newsDetails.title}</p>
          <div
            dangerouslySetInnerHTML={{ __html: newsDetails.fullDescription }}
          /> 
          <Link to={'/'+id+'/news'} style={{background:'green'}}>Вернуться назад</Link>
        </div>
      ) : (
        ""
      )}
      
    </>
  );
};
export default DetailsNews;
