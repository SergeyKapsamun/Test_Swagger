import React, { useEffect, useState } from "react";
import getCategoriesAxios from "../../getAxios/getCategoriesAxios";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getNewsSlice } from "../../redux/reduxSlice/newsSlice";
import { getCategories } from "../../redux/reduxSlice/categoriesSlice";

const Categories = () => {
  const { categories, isCategories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <>
      {!isCategories ? <div>Load...</div> : ""}
      {categories?.map((categorie, index) => (
        <Link
          style={{ margin: "20px", paddingTop: "40px" }}
          key={index}
          to={"/" + index + "/news"}
        >
          {categorie.name}
        </Link>
      ))}
      <Outlet />
    </>
  );
};

export default Categories;
