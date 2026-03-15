import "./App.css";
import Home from "./pages/home/Home.jsx";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <h1>Hello World</h1> */}
        <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
