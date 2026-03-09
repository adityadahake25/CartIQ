import React from "react";
import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(`http://localhost:7000/api/products`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.log(`Error fetched error : ${error}`);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Products</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              textAlign: "center",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={product.images[0]}
              alt={product.itemName}
              style={{ width: "100%", height: "180px", objectFit: "cover" }}
            />

            <h3>{product.itemName}</h3>
            <p>{product.brand}</p>

            <p>
              <b>₹{product.price}</b>{" "}
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                ₹{product.mrp}
              </span>
            </p>

            <p style={{ color: "green" }}>{product.discountPercentage}% OFF</p>

            <p>⭐ {product.ratings?.average}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Products;
