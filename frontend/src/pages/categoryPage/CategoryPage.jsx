import React from "react";
import { useParams } from "react-router-dom";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const category = decodeURIComponent(categoryName);

  // 🔥 Image Mapping
  const categoryImageMap = {
    Grocery: "Grocery.png",
    Electronics: "Electronics.png",
    "Clothing & Apparel": "Clothing-&-Apparel.png",
    "Beauty & Personal Care": "Beauty-&-Personal-Care.png",
    "Books & Media": "Books-&-Media.png",
    "Sports & Outdoors": "Sports-&-Outdoors.png",
    "Home & Kitchen": "Home-&-Kitchen.png",
    "Office & Stationery": "Office-&-Stationery.png",
    "Pet Supplies": "Pet-Supplies.png",
    "Baby & Kids": "Baby-&-Kids.png",
  };

  const imageName = categoryImageMap[category];

  return (
    <div className="category-page">
      {/* 🔥 Banner */}
      <div
        className="category-banner"
        style={{
          backgroundImage: `url(/CategoryADTemplate/${imageName})`,
        }}
      >
        <div className="banner-overlay">
          <h1>{category}</h1>
          <p>Explore Our Latest Products</p>
        </div>
      </div>

      {/* 🔥 Main Content */}
      <div className="category-container">
        {/* Sidebar */}
        <div className="filter-sidebar">
          <h3>Filter By</h3>

          <div className="filter-section">
            <h4>Brand</h4>
            <input type="text" placeholder="Search brand..." />
            <label>
              <input type="checkbox" /> Apple
            </label>
            <label>
              <input type="checkbox" /> Samsung
            </label>
            <label>
              <input type="checkbox" /> Nike
            </label>
            <label>
              <input type="checkbox" /> Adidas
            </label>
          </div>

          <div className="filter-section">
            <h4>Price</h4>
            <input type="range" min="100" max="50000" />
            <p>₹100 - ₹50000</p>
          </div>

          <div className="filter-section">
            <h4>Ratings</h4>
            <label>
              <input type="checkbox" /> 4★ & above
            </label>
            <label>
              <input type="checkbox" /> 3★ & above
            </label>
          </div>

          <div className="filter-section">
            <h4>Discount</h4>
            <label>
              <input type="checkbox" /> 10%+
            </label>
            <label>
              <input type="checkbox" /> 25%+
            </label>
          </div>

          <div className="filter-section">
            <h4>Availability</h4>
            <label>
              <input type="checkbox" /> In Stock
            </label>
          </div>

          <button className="apply-btn">Apply Filters</button>
        </div>

        {/* Products */}
        <div className="product-section">
          <div className="product-header">
            <p>Showing 12 Products</p>
            <select>
              <option>Sort by Popularity</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
            </select>
          </div>

          <div className="product-grid">
            {Array(12)
              .fill()
              .map((_, i) => (
                <div className="product-card" key={i}>
                  <img src="/CategoryList/ctg1.png" alt="" />
                  <h4>Sample Product</h4>
                  <p>₹499</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
