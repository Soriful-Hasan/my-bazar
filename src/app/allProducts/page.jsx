"use client";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";
import Products from "../hotProducts/Products";
import { getAllProducts } from "../lib/getAllProducts";

export default function page() {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    async function fetchAndLog() {
      const products = await getAllProducts();
      setProductData(products);
    }
    fetchAndLog();
  }, []);
  return (
    <div className="py-20 min-h-screen">
      {" "}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
          <Star className="w-4 h-4 fill-current" />
          All Products
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Explore Our{" "}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            All Products
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover the latest gadgets, electronics, and tech accessories from
          top brands worldwide
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-10/12 mx-auto">
        {productData?.map((product) => (
          <Products key={product._id} product={product}></Products>
        ))}
      </div>
    </div>
  );
}
