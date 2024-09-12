import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import StartPage from "./components/StartPage";
import "./App.css";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import { useState } from "react";
import CartProduct from "./pages/CartProduct";

function App() {
  const [count, setCount] = useState(0);
  const [productCartList, setProductCartList] = useState([]);

  const handelAddProduct = (product) => {
    const existingProduct = productCartList.find(
      (cartItem) => cartItem.id === product.id
    );

    if (!existingProduct) {
      setProductCartList((prevCartList) => [
        ...prevCartList,
        { ...product, quantity: 1 },
      ]);
      setCount((count) => count + 1);
    } else {
      alert("This product is already in the cart!");
    }
  };
  return (
    <div className="container app w-2/3 mx-auto">
      <BrowserRouter>
        <StartPage />
        <Header count={count} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product/:id"
            element={
              <ProductPage count={count} handelAddProduct={handelAddProduct} />
            }
          />
          <Route
            path="/cartProduct"
            element={
              <CartProduct
                productCartList={productCartList}
                setProductCartList={setProductCartList}
                setCount={setCount}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
