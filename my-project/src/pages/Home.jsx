import React, { useEffect, useState } from "react";
import InfoShop from "../components/InfoShop";
import Products from "../components/Products";
import SearchNav from "../components/SearchNav";

const PRODUCTS_API = "https://fakestoreapi.com/products";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  const handleFilter = (filter) => {
    if (!filter) {
      setProducts(allProducts);
    } else {
      const newList = allProducts.filter(
        (product) => product.category === filter
      );
      setProducts(newList);
    }
  };

  const handelSortBy = (SortBy) => {
    if (!SortBy) {
      setProducts(allProducts);
    } else {
      const sortedList = [...allProducts].sort((a, b) => {
        if (SortBy === "rate") {
          return b.rating.rate - a.rating.rate; // Sort by rate (descending)
        }
        if (SortBy === "price") {
          return a.price - b.price; // Sort by price (ascending)
        }
        return 0;
      });
      setProducts(sortedList);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(PRODUCTS_API);
        const data = await response.json();
        setProducts(data);
        setAllProducts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="px-8 my-6">
      <InfoShop />
      <SearchNav handleFilter={handleFilter} handelSortBy={handelSortBy} />
      <Products products={products} />
    </div>
  );
}
