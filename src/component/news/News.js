import React from 'react';
import { useSelector } from 'react-redux';
import {  Outlet } from 'react-router-dom';
import ItemNews from '../itemNews/ItemNews';
export const News = () => {

    const news=useSelector(state=>state.news.newsArray)

    return(<> <Outlet/>
{
    news?.map((elemNew)=><ItemNews key={elemNew.id} id={elemNew.id} title={elemNew.title} description={elemNew.shortDescription}/>)
}
    </>);
};
