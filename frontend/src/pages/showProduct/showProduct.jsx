import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ShowProduct.css";

const ShowProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
      console.log("Fetching product:", id);

      const response = await fetch(`http://localhost:7000/api/products/${id}`);

      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching product:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  // 🔄 Loading state
  if (loading) return <h2 className="loading">Loading...</h2>;

  // ❌ Product not found
  if (!product) return <h2 className="error">Product Not Found</h2>;

  return (
    <div className="product-page">
      {/* LEFT - IMAGE */}
      <div className="product-left">
        <img
          src={product.images?.[0] || "/default.png"}
          alt={product.itemName}
        />
      </div>

      {/* RIGHT - DETAILS */}
      <div className="product-right">
        <h1 className="title">{product.itemName}</h1>

        <p className="brand">Brand: {product.brand}</p>

        <p className="description">{product.description}</p>

        {/* PRICE */}
        <div className="price-box">
          <span className="price">₹{product.price}</span>

          {product.mrp && <span className="mrp">₹{product.mrp}</span>}

          {product.discountPercentage && (
            <span className="discount">{product.discountPercentage}% OFF</span>
          )}
        </div>

        {/* RATINGS */}
        <div className="rating">
          ⭐ {product.ratings?.average || 4.5} (
          {product.ratings?.totalReviews || 0} reviews)
        </div>

        {/* DELIVERY */}
        <p className="delivery">
          🚚 Delivery in {product.deliveryInfo?.estimatedDeliveryDays || 2} days
        </p>

        {/* STOCK */}
        <p className="stock">
          {product.stock > 0 ? "✅ In Stock" : "❌ Out of Stock"}
        </p>

        {/* BUTTONS */}
        <div className="btn-group">
          <button className="cart-btn">Add to Cart</button>
          <button className="buy-btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
