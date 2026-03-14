import React from "react";

const CategoryCard = ({ img, link }) => {
  return (
    <div className="categoryDiv">
      <div className="leftCtg">
        <div className="ctgItem">
          <a href={link} className="ctgImg">
            <img src={img} alt="groceryImg" />
          </a>
        </div>
      </div>

      <div className="midCtg"></div>

      <div className="rightCtg"></div>
    </div>
  );
};

export default CategoryCard;
