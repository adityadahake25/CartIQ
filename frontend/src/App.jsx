import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import AllProducts from "./pages/allProducts/AllProducts.jsx";
import HeroSection from "./components/heroSection/HeroSection.jsx";
import CategoriesSection from "./components/CategoriesSection/CategoriesSection.jsx";

function App() {
  return (
    <>
      {/* <h1>Hello World</h1> */}
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <AllProducts />
    </>
  );
}

export default App;
