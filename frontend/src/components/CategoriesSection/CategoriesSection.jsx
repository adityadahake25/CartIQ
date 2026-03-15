import React from "react";
import "./CategoriesSection.css";

function CategoriesSection() {
  const categories = [
    { name: "Grocery", img: "/CategoryList/ctg1.png" },
    { name: "Clothing & Apparel", img: "/CategoryList/ctg2.png" },
    { name: "Electronics", img: "/CategoryList/ctg3.png" },
    { name: "Sports & Outdoors", img: "/CategoryList/ctg4.png" },
    { name: "Books & Media", img: "/CategoryList/ctg5.png" },
    { name: "Beauty & Personal Care", img: "/CategoryList/ctg6.png" },
    { name: "Home & Kitchen", img: "/CategoryList/ctg7.png" },
    { name: "Office & Stationery", img: "/CategoryList/ctg8.png" },
  ];

  return (
    <>
      <div className="title">Categories</div>

      <div className="ctgList">
        {categories.map((category, index) => (
          <div className="mainDiv" key={index}>
            <a className="card ctgCard" href="#">
              <img
                src={category.img}
                className="card-img-top"
                alt={category.name}
              />
              <div className="card-body cardB">
                <p className="card-text">{category.name}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default CategoriesSection;
