import React from "react";
import { Link } from "react-router-dom";
import "./Category.css";

const Category = ({ category }) => {
  const { name, picture, description, _id } = category;
  return (
    <div className="card card-compact w-96 text-black bg-orange-300 shadow-xl">
      <figure>
        <img src={picture} alt="Shoes" className="categoryImage" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl text-pink-700">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={`/categories/${_id}`}>
            <button className="btn bg-pink-500 border-none">See All</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
