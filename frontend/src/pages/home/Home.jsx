import React from "react";
import Navbar from "../../components/navbar/Navbar.jsx";
import AllProducts from "../../pages/allProducts/AllProducts.jsx";
import HeroSection from "../../components/heroSection/HeroSection.jsx";
import CategoriesSection from "../../components/CategoriesSection/CategoriesSection.jsx";
import FeatureSection from "../../components/featureSection/FeatureSection.jsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <FeatureSection />
      <AllProducts />
    </>
  );
};

export default Home;
