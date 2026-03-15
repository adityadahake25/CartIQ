import React from "react";
import { useNavigate } from "react-router-dom";
import "./FeatureSection.css";

const FeatureSection = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="title">Smart Features</div>

      <div className="features">
        <div
          className="featureCard"
          onClick={() => navigate("/ai-recommendation")}
        >
          <img
            src="/FeatureImages/ai_recommendation.png"
            alt="AI Recommendation"
            className="featureImg"
          />
          <div className="featureText">
            <h2>AI Recommendation</h2>
            <p>Personalized suggestions based on your shopping behavior</p>
          </div>
          <span className="featureArrow">→</span>
        </div>

        <div className="featureCard" onClick={() => navigate("/price-tracker")}>
          <img
            src="/FeatureImages/price_tracker.png"
            alt="Price Tracker"
            className="featureImg"
          />
          <div className="featureText">
            <h2>Price Tracker</h2>
            <p>Track price drops and get notified when price decreases</p>
          </div>
          <span className="featureArrow">→</span>
        </div>

        <div className="featureCard" onClick={() => navigate("/smart-compare")}>
          <img
            src="/FeatureImages/smart_compare.png"
            alt="Smart Compare"
            className="featureImg"
          />
          <div className="featureText">
            <h2>Smart Compare</h2>
            <p>Compare products easily and choose the best option</p>
          </div>
          <span className="featureArrow">→</span>
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
