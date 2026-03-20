import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ShowProduct.css";

const ShowProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProduct = async () => {
    try {
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

  if (loading) return <h2 className="sp-loading">Loading...</h2>;
  if (!product) return <h2 className="sp-error">Product Not Found</h2>;

  return (
    <div className="sp-container">
      <div className="sp-card">
        {/* LEFT */}
        <div className="sp-left">
          <img
            src={product.images?.[0] || "/default.png"}
            alt={product.itemName}
            className="sp-image"
          />

          <div className="sp-btn-group">
            <button className="sp-cart-btn">🛒 Add to Cart</button>
            <button className="sp-buy-btn">⚡ Buy Now</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="sp-right">
          <h1 className="sp-title">{product.itemName}</h1>

          <p className="sp-brand">
            Brand: <span>{product.brand}</span>
          </p>

          <div className="sp-rating">
            ⭐ {product.ratings?.average}
            <span> ({product.ratings?.totalReviews} reviews)</span>
          </div>

          {/* PRICE */}
          <div className="sp-price-box">
            <span className="sp-price">₹{product.price}</span>
            <span className="sp-mrp">₹{product.mrp}</span>
            <span className="sp-discount">
              {product.discountPercentage}% OFF
            </span>
          </div>

          {/* DESCRIPTION */}
          <p className="sp-description">{product.description}</p>

          {/* DELIVERY */}
          <div className="sp-info-box">
            <p>
              🚚 Delivery in{" "}
              <b>{product.deliveryInfo?.estimatedDeliveryDays} days</b>
            </p>
            <p>💰 Delivery Charge: ₹{product.deliveryInfo?.deliveryCharge}</p>
            <p>
              💳 COD:{" "}
              {product.deliveryInfo?.cashOnDelivery
                ? "Available"
                : "Not Available"}
            </p>
          </div>

          {/* STOCK */}
          <div className={`sp-stock ${product.stock > 0 ? "sp-in" : "sp-out"}`}>
            {product.stock > 0 ? "In Stock ✅" : "Out of Stock ❌"}
          </div>

          {/* RETURN */}
          <div className="sp-return">
            🔁{" "}
            {product.isReturnable
              ? `${product.returnDays} Days Return Available`
              : "No Return"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowProduct;
