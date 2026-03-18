import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const category = decodeURIComponent(categoryName);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `http://localhost:7000/api/products?category=${encodeURIComponent(category)}`,
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [category]);

  // 🔥 Image Mapping
  const categoryImageMap = {
    grocery: "Grocery.png",
    electronics: "Electronics.png",
    "clothing & apparel": "Clothing-&-Apparel.png",
    "beauty & personal care": "Beauty-&-Personal-Care.png",
    "books & media": "Books-&-Media.png",
    "sports & outdoors": "Sports-&-Outdoors.png",
    "home & kitchen": "Home-&-Kitchen.png",
    "office & stationery": "Office-&-Stationery.png",
    "pet supplies": "Pet-Supplies.png",
    "baby & kids": "Baby-&-Kids.png",
  };

  const imageName = categoryImageMap[category] || "default.png";

  return (
    <div className="category-page">
      {/* 🔥 Banner */}
      <div
        className="category-banner"
        style={{
          backgroundImage: `url(/CategoryADTemplate/${imageName})`,
        }}
      ></div>

      <div className="category-container">
        {/* Sidebar */}
        <div className="filter-sidebar">
          <h3>Filter By</h3>

          <div className="filter-section">
            <h4>Brand</h4>
            <input type="text" placeholder="Search brand..." />
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
          </div>

          <button className="apply-btn">Apply Filters</button>
        </div>

        {/* Products */}
        <div className="product-section">
          <div className="product-header">
            <p>Showing {products.length} Products</p>

            <select>
              <option>Sort by Popularity</option>
              <option>Price Low to High</option>
              <option>Price High to Low</option>
            </select>
          </div>

          {/* Loading */}
          {loading ? (
            <h2>Loading...</h2>
          ) : (
            <div className="product-grid">
              {products.length === 0 ? (
                <p>No products found</p>
              ) : (
                products.map((product) => (
                  <div className="product-card" key={product.id}>
                    {/* Discount */}
                    {product.discountPercentage && (
                      <div className="discountBadge">
                        {product.discountPercentage}% OFF
                      </div>
                    )}

                    {/* Image */}
                    <img
                      src={product.images?.[0] || "/default.png"}
                      alt={product.itemName}
                    />

                    {/* Info */}
                    <h4>{product.itemName}</h4>
                    <p className="brand">{product.brand}</p>

                    {/* Price */}
                    <div className="price">
                      ₹{product.price}
                      {product.mrp && (
                        <span className="mrp">₹{product.mrp}</span>
                      )}
                    </div>

                    {/* Rating */}
                    <div className="rating">
                      ⭐ {product.ratings?.average || 4.5}
                    </div>

                    {/* Button */}
                    <button className="addCartBtn">Add to Cart</button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
