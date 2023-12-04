import React from "react";
const Brand_Category_Card = ({ item }) => {
  return (
    <div className="category-card mb-3">
      <div className="img-container">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="card-content">
        <div className="right"></div>
        <div className="left"></div>
        <h2>{item.name.toUpperCase()}</h2>
      </div>
    </div>
  );
};

export default Brand_Category_Card;
