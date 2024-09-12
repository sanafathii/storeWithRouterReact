import React from "react";
import { Link } from "react-router-dom";
import Product from "./product";

export default function Products({ products }) {
  return (
    <div className="flex flex-wrap justify-around gap-10">
      {products.map((product) => {
        return (
          <Link to={`/product/${product.id}`} key={product.id}>
            <Product product={product} />
          </Link>
        );
      })}
    </div>
  );
}
