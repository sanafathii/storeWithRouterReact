import React from "react";

export default function Product({ product }) {
  const { id, title, price, image, category, rating } = product;
  return (
    <div className="w-[280px] h-[420px] product  border border-gray-400 rounded-md">
      <div>
        <img
          src={image}
          alt=""
          className="w-full h-72 object-fill  rounded-t-md mb-3"
        />
      </div>
      <div className="py-2 px-4">
        <p className="font-semibold">
          {title.length > 20 ? title.slice(0, 25) + "..." : title}
        </p>
        <p className="font-extralight">{category}</p>
        <p> {price} $</p>
        <p>
          {rating.rate} <span>⭐</span>
        </p>
      </div>
    </div>
  );
}
