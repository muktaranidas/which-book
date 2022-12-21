import React from "react";

const SpecialBookCard = ({ specialBook }) => {
  const { title, description, img } = specialBook;
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default SpecialBookCard;
