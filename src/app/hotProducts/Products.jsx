"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Heart, ShoppingCart, Eye, Star, Zap } from "lucide-react";

export default function Products({ product }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  return (
    <div className="group relative max-w-sm bg-white shadow-md rounded-md overflow-hidden m-4 ">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-20 flex flex-col space-y-2">
        {discount > 0 && (
          <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            -{discount}%
          </span>
        )}
        <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center">
          <Zap className="w-3 h-3 mr-1" />
          Hot
        </span>
      </div>

      {/* Action Buttons */}
      <div className="absolute top-4 right-4 z-20 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`p-3 rounded-full shadow-lg backdrop-blur-sm transition-all duration-200 hover:scale-110 ${
            isLiked
              ? "bg-red-500 text-white"
              : "bg-white/90 text-gray-600 hover:bg-red-50"
          }`}
        >
          <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
        </button>
        <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200 hover:scale-110">
          <Eye className="w-4 h-4" />
        </button>
      </div>

      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
        <img
          className="w-full h-64 object-cover transition-all duration-700 group-hover:scale-110"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Quick Add to Cart - appears on hover */}
        <div
          className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
            isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <button className="flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full shadow-xl hover:bg-white transition-all duration-200 hover:scale-105">
            <ShoppingCart className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Quick Add</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-4 h-4 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="text-xs text-gray-500 ml-1">(4.8)</span>
          </div>
          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            In Stock
          </span>
        </div>

        {/* Product Info */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-800 line-clamp-2 leading-tight group-hover:text-blue-600 transition-colors duration-200">
            {product.name}
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2">
          <div className="space-y-1">
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-gray-900">
                ৳ {product.price?.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ৳ {product.originalPrice?.toLocaleString()}
                </span>
              )}
            </div>
            {discount > 0 && (
              <p className="text-xs text-green-600 font-semibold">
                Save ৳{" "}
                {(product.originalPrice - product.price)?.toLocaleString()}
              </p>
            )}
          </div>

          <Link
            href={`/productDetails/${product._id}`}
            className="group/btn relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-2xl overflow-hidden "
          >
            <span className="">View Details</span>
          </Link>
        </div>

        {/* Features */}
        <div className="flex justify-between text-xs text-gray-500 pt-2 border-t border-gray-100">
          <span className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            Free Delivery
          </span>
          <span>1 Year Warranty</span>
        </div>
      </div>

      {/* Shimmer Effect */}
      <div className="absolute inset-0 -top-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shimmer transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
}
