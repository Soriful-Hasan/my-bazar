// app/not-found.jsx
"use client";

import { Home, ArrowLeft, Package } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* 404 Number with animated elements */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-bold text-gray-200 select-none">
            404
          </h1>

          {/* Floating shopping elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="animate-bounce"
              style={{ animationDelay: "0s", animationDuration: "2s" }}
            >
              <Package size={48} className="text-blue-500 opacity-70" />
            </div>
          </div>

          {/* Decorative elements */}
          <div
            className="absolute top-1/4 left-1/4 animate-pulse"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-4 h-4 bg-orange-400 rounded-full opacity-60"></div>
          </div>
          <div
            className="absolute top-1/3 right-1/4 animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "3s" }}
          >
            <div className="w-3 h-3 bg-green-400 rounded-full opacity-50"></div>
          </div>
          <div
            className="absolute bottom-1/4 left-1/3 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="w-5 h-5 bg-purple-400 rounded-lg opacity-40"></div>
          </div>
        </div>

        {/* Error message */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            The page youre looking for seems to have wandered off.
          </p>
          <p className="text-lg text-gray-500">
            Dont worry, lets get you back to shopping!
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            href="/"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Home size={20} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 bg-white hover:bg-gray-50 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 border-2 border-gray-200 hover:border-gray-300"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Footer message */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            Need help?{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
