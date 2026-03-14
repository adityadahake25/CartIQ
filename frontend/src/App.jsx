import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx";
import Product from "./pages/Products/Products.jsx";
import HeroSection from "./components/heroSection/HeroSection.jsx";
import CategoriesSection from "./components/CategoriesSection/CategoriesSection.jsx";

function App() {
  return (
    <>
      {/* <h1>Hello World</h1> */}
      <Navbar />
      <HeroSection />
      <CategoriesSection />
      <Product />
    </>
  );
}

export default App;
