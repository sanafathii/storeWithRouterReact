import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails";

const PRODUCT_API = "https://fakestoreapi.com/products";

export default function ProductPage({ handelAddProduct }) {
  const [productInfo, setproductInfo] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getProductInfo = async () => {
      try {
        const { data } = fetch(`${PRODUCT_API}/${id}`)
          .then((data) => data.json())
          .then((data) => setproductInfo(data));
      } catch (error) {
        console.error("Failed to fetch user info:", error);
      }
    };

    if (id) {
      getProductInfo();
    }
  }, [id]);

  if (!productInfo) {
    return <p>No user information available.</p>;
  }
  return (
    <>
      <ProductDetails
        productInfo={productInfo}
        handelAddProduct={() => handelAddProduct(productInfo)}
      />
    </>
  );
}
