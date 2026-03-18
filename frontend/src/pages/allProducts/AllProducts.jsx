import React, { useEffect, useState } from "react";
import "./AllProducts.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:7000/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(`Error fetching products: ${error}`);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="productsContainer">
      <h1 className="productsTitle">Products</h1>

      <div className="productsGrid">
        {products.map((product) => (
          <div key={product._id} className="productCard">
            {/* Discount badge */}
            {product.discountPercentage && (
              <div className="discountBadge">
                {product.discountPercentage}% OFF
              </div>
            )}

            <img
              src={product.images?.[0] || "/default.png"}
              alt={product.itemName}
              className="productImage"
            />

            <div className="productInfo">
              <h3 className="productName">{product.itemName}</h3>

              <p className="productBrand">{product.brand}</p>

              <div className="priceSection">
                <span className="price">₹{product.price}</span>

                {product.mrp && <span className="mrp">₹{product.mrp}</span>}
              </div>

              <div className="rating">
                ⭐ {product.ratings?.average || "4.5"}
              </div>

              <button className="addCartBtn">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
