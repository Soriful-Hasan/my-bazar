import { ShoppingBag } from "lucide-react";
import React from "react";

export default function loading() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-30"></div>

      {/* Main loader container */}
      <div className="relative flex flex-col items-center justify-center space-y-8">
        {/* Animated shopping bag icon */}
        <div className="relative">
          <div className="animate-bounce">
            <ShoppingBag
              size={64}
              className="text-blue-600 drop-shadow-lg"
              strokeWidth={1.5}
            />
          </div>

          {/* Floating dots around the bag */}
          <div className="absolute -top-2 -right-2">
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-ping"></div>
          </div>
          <div className="absolute -bottom-2 -left-2">
            <div
              className="w-2 h-2 bg-green-400 rounded-full animate-ping"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
          <div className="absolute top-1 -right-4">
            <div
              className="w-2 h-2 bg-purple-400 rounded-full animate-ping"
              style={{ animationDelay: "500ms" }}
            ></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Loading Your Store
          </h2>
          <p className="text-gray-600 text-sm animate-pulse">
            Preparing the best deals for you...
          </p>
        </div>

        {/* Animated progress bar */}
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
        </div>

        {/* Floating product icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute top-1/4 left-1/4 animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "3s" }}
          >
            <div className="w-6 h-6 bg-pink-400 rounded-lg opacity-20 rotate-12"></div>
          </div>
          <div
            className="absolute top-1/3 right-1/4 animate-pulse"
            style={{ animationDelay: "2s" }}
          >
            <div className="w-4 h-4 bg-yellow-400 rounded-full opacity-25"></div>
          </div>
          <div
            className="absolute bottom-1/3 left-1/3 animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "2s" }}
          >
            <div className="w-5 h-5 bg-green-400 rounded-lg opacity-15 -rotate-12"></div>
          </div>
          <div
            className="absolute bottom-1/4 right-1/3 animate-pulse"
            style={{ animationDelay: "1.5s" }}
          >
            <div className="w-3 h-3 bg-blue-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
