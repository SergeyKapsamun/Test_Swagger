import React, { useEffect, useState } from 'react';
import getCategoriesAxios from '../../getAxios/getCategoriesAxios';
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { getNewsSlice } from '../../redux/reduxSlice/newsSlice';

const Categories = () => {
   const [categories, setCategories]=useState();
   const dispatch=useDispatch();
   useEffect(()=>{
    getCategoriesAxios(setCategories)
   },[])
    return(<>
   
 {categories?.map((categorie, index)=><Link style={{margin:'20px', paddingTop:'40px'}} onClick={()=>dispatch(getNewsSlice(index))} key={index} to={'/'+index+'/news'} >{categorie.name}</Link>)}
   <Outlet/>  </>);
};


export default Categories;