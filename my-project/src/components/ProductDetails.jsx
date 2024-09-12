import React from "react";

export default function ProductDetails({ productInfo, handelAddProduct }) {
  return (
    <div className="my-16  product py-10 px-10" key={productInfo.id}>
      <div className="border py-6 px-6 rounded-md flex border-gray-300">
        <div className="w-[270px]">
          <img
            src={productInfo.image}
            className="w-full h-72 object-fill"
            alt=""
          />
        </div>
        <div className="ml-6">
          <p className="mb-3 text-lg font-bold">{productInfo.title}</p>
          <p className="mb-3"> {productInfo.description}</p>
          <p className="font-semibold mb-2">{productInfo.category}</p>
          <p className="mb-2">
            {productInfo.rating.rate} <span>⭐</span>
          </p>
          <p className="mb-3">{productInfo.price} $</p>

          <button
            onClick={handelAddProduct}
            className="bg-blue-500 rounded-md px-4 py-1 text-white hover:bg-blue-600 hover:transition-colors"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
