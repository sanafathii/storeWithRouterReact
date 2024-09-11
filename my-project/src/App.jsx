import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import StartPage from "./components/StartPage";
import "./App.css";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container app w-2/3 mx-auto">
      <BrowserRouter>
        <StartPage />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
