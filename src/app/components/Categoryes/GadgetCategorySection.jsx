'use client'
import React, { useState } from "react";
import {
  Smartphone,
  Laptop,
  Headphones,
  Watch,
  Camera,
  Gamepad2,
  Tablet,
  Speaker,
  Monitor,
  Keyboard,
  Mouse,
  Cpu,
  ArrowRight,
  Star,
  TrendingUp,
} from "lucide-react";

export default function GadgetCategorySection() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Smartphones",
      icon: Smartphone,
      productCount: "2,450+",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      trending: true,
      description: "Latest flagship phones and accessories",
    },
    {
      id: 2,
      name: "Laptops & PCs",
      icon: Laptop,
      productCount: "1,890+",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      textColor: "text-purple-600",
      trending: false,
      description: "Gaming, business, and ultrabooks",
    },
    {
      id: 3,
      name: "Audio & Headphones",
      icon: Headphones,
      productCount: "3,200+",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
      trending: true,
      description: "Wireless, noise-canceling, and studio",
    },
    {
      id: 4,
      name: "Smart Watches",
      icon: Watch,
      productCount: "850+",
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      textColor: "text-orange-600",
      trending: true,
      description: "Fitness trackers and smartwatches",
    },
    {
      id: 5,
      name: "Cameras",
      icon: Camera,
      productCount: "1,120+",
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-indigo-50",
      textColor: "text-indigo-600",
      trending: false,
      description: "DSLR, mirrorless, and action cameras",
    },
    {
      id: 6,
      name: "Gaming",
      icon: Gamepad2,
      productCount: "2,800+",
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      textColor: "text-red-600",
      trending: true,
      description: "Consoles, accessories, and peripherals",
    },
    {
      id: 7,
      name: "Tablets",
      icon: Tablet,
      productCount: "650+",
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-50",
      textColor: "text-teal-600",
      trending: false,
      description: "iPad, Android, and Windows tablets",
    },
    {
      id: 8,
      name: "Smart Speakers",
      icon: Speaker,
      productCount: "420+",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      trending: true,
      description: "Voice assistants and smart home",
    },
  ];

  const featuredCategories = [
    {
      name: "Gaming Monitors",
      icon: Monitor,
      count: "890+",
      color: "from-violet-500 to-purple-500",
    },
    {
      name: "Mechanical Keyboards",
      icon: Keyboard,
      count: "340+",
      color: "from-emerald-500 to-teal-500",
    },
    {
      name: "Gaming Mice",
      icon: Mouse,
      count: "560+",
      color: "from-rose-500 to-pink-500",
    },
    {
      name: "PC Components",
      icon: Cpu,
      count: "1,200+",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white ">
      <div className="max-w-10/12 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Star className="w-4 h-4 fill-current" />
            Shop by Categories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tech Collection
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest gadgets, electronics, and tech accessories from
            top brands worldwide
          </p>
        </div>

        {/* Main Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="group relative bg-white rounded-md shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:scale-105"
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                {/* Trending Badge */}
                {category.trending && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="flex items-center gap-1 bg-gradient-to-r from-orange-400 to-red-400 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      <TrendingUp className="w-3 h-3" />
                      Hot
                    </div>
                  </div>
                )}

                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                ></div>

                <div className="p-6 relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 ${category.bgColor} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent
                      className={`w-8 h-8 ${category.textColor}`}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2 mb-4">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-600 group-hover:text-gray-500">
                      {category.description}
                    </p>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-lg font-bold ${category.textColor}`}
                      >
                        {category.productCount}
                      </span>
                      <span className="text-sm text-gray-500">products</span>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div
                    className={`flex items-center text-sm font-semibold ${category.textColor} group-hover:gap-2 transition-all duration-300`}
                  >
                    <span>Shop Now</span>
                    <ArrowRight
                      className={`w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 ${
                        hoveredCategory === category.id
                          ? "opacity-100"
                          : "opacity-0"
                      }`}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Featured Sub-Categories */}
        <div className="bg-white rounded-md shadow-md p-8 mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Featured Categories
              </h3>
              <p className="text-gray-600">Specialized gear for enthusiasts</p>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={index}
                  className="group p-6 rounded-2xl border-2 border-gray-100 hover:border-transparent hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-gray-700">
                    {category.name}
                  </h4>
                  <p className="text-sm text-gray-600 font-medium">
                    {category.count} items
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
