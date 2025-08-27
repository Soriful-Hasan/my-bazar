"use client";
import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-white ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-12">
          {/* Left side - Content */}
          <div className="flex-1 lg:pr-12 mb-12 lg:mb-0">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
              New Product Launch
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build the
              <span className="block text-blue-600">Future Today</span>
            </h1>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              Transform your ideas into reality with our cutting-edge platform.
              Experience the next generation of digital innovation that helps
              you achieve your goals faster and more efficiently.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="px-8 py-4 cursor-pointer bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200">
                Get Started
              </button>

              <button className="px-8 cursor-pointer py-4 bg-transparent border-2 border-gray-300 text-gray-700 rounded-lg font-semibold text-lg hover:border-gray-400 hover:bg-gray-50 transition-colors duration-200">
                <span className="flex items-center justify-center">
                  Watch Demo
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m-6 4h1m4 0h1"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 text-gray-600">
              <div>
                <div className="text-2xl font-bold text-gray-900">10,000+</div>
                <div className="text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm">Uptime</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">24/7</div>
                <div className="text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="flex-1 lg:pl-12">
            <div className="relative">
              {/* Placeholder image - replace with your actual image */}
              <div className="w-full h-96 lg:h-[500px] bg-gray-100 rounded-2xl flex items-center justify-center">
                <img
                  src="https://plus.unsplash.com/premium_photo-1677995700941-100976883af7?q=80&w=1223&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Hero Image"
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-100 rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
