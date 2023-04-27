import React from "react";
import { Link } from "react-router-dom";

const ItemNews = ({ title, description, id }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        textAlign: "left",
        margin: "10px",
        padding: "10px",
      }}
    >
      <p>title: {title}</p>
      <p>description: {description}</p>
      <Link to={"details/" + id}>Show more</Link>
    </div>
  );
};
export default ItemNews;
