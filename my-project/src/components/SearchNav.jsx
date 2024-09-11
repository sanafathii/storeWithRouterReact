import React, { useEffect, useState } from "react";

export default function SearchNav({ handleFilter, handelSortBy }) {
  const [filter, setFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    handelSortBy(sortBy);
  }, [sortBy]);

  useEffect(() => {
    handleFilter(filter);
  }, [filter]);

  return (
    <div className="flex mb-6">
      <div>
        <select
          className="bg-white px-3 py-2 rounded-md"
          name=""
          id="filter"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="men's clothing">men's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="electronics">electronics</option>
          <option value="women's clothing">women's clothing</option>
        </select>
      </div>
      <div className="ml-5">
        <select
          name=""
          id=""
          className="bg-white px-3 py-2 rounded-md"
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By: </option>
          <option value="rate">rate</option>
          <option value="price">price</option>
        </select>
      </div>
    </div>
  );
}
