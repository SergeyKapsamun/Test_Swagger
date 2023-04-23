import React from 'react';
import { useSelector } from 'react-redux';
const DetailsNews = () => {
    const detailsNews=useSelector(state=>state.detailsNews.newsDetailsArray);
    return(<>
    <p>title: {detailsNews.title}</p>
    <div dangerouslySetInnerHTML={{ __html: detailsNews.fullDescription }} />
    </>);
};
export default DetailsNews;