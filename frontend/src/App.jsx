import "./App.css";
import Home from "./pages/home/Home.jsx";
import CategoryPage from "./pages/categoryPage/CategoryPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />

        {/* Category Page (Dynamic) */}
        <Route path="/category/:categoryName" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
