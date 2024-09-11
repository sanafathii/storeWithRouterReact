import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PRODUCT_API = "https://fakestoreapi.com/products";

export default function ProductPage() {
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
    <div className="my-16  flex product py-10 px-10" key={productInfo.id}>
      <div className="w-[200px]">
        <img src={productInfo.image} className="w-full" alt="" />
      </div>
      <div className="ml-6">
        <p className="mb-3">{productInfo.title}</p>
        <p className="mb-3"> {productInfo.description}</p>
        <p>{productInfo.category}</p>
        <p>
          {productInfo.rating.rate} <span>⭐</span>
        </p>
        <p>{productInfo.price} $</p>

        <button className="">add to cart</button>
      </div>
    </div>
  );
}
