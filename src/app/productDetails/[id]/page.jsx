import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getProducts } from "@/app/lib/getProducts";
import {
  Star,
  Heart,
  Share2,
  ShoppingCart,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function page({ params }) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/api/auth/signin");
  }
  const { id } = params;
  const products = await getProducts();
  const product = products.find((p) => p._id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Product not found!
          </h2>
          <p className="text-gray-600">
            The product you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Home</span>
            <span>/</span>
            <span>Products</span>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </nav>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 p-8 lg:p-12">
              <div className="sticky top-8">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Featured
                </div>

                {/* Action Icons */}
                <div className="absolute top-4 right-4 z-10 flex space-x-2">
                  <button className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
                    <Heart className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                {/* Main Image */}
                <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-96 lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Thumbnail Gallery */}
                <div className="flex space-x-4 mt-6 justify-center">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-16 h-16 rounded-lg overflow-hidden border-2 border-transparent hover:border-blue-500 cursor-pointer transition-all duration-200"
                    >
                      <img
                        src={product.image}
                        alt={`View ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12 space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    In Stock
                  </span>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    <span className="ml-2 text-sm text-gray-600">
                      (4.8) 324 reviews
                    </span>
                  </div>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {product.name}
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Price Section */}
              <div className="bg-gray-50 rounded-2xl p-6">
                <div className="flex items-baseline space-x-4 mb-4">
                  <span className="text-4xl font-bold text-gray-900">
                    ৳ {product.price?.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <>
                      <span className="text-2xl text-gray-400 line-through">
                        ৳ {product.originalPrice?.toLocaleString()}
                      </span>
                      <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-bold">
                        {Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                            100
                        )}
                        % OFF
                      </span>
                    </>
                  )}
                </div>
                <p className="text-sm text-gray-600">
                  Price includes all taxes and fees
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <Truck className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">
                    Free Delivery
                  </p>
                  <p className="text-xs text-gray-600">2-3 days</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">
                    Warranty
                  </p>
                  <p className="text-xs text-gray-600">1 Year</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <RotateCcw className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">
                    Easy Return
                  </p>
                  <p className="text-xs text-gray-600">30 days</p>
                </div>
              </div>

              {/* Quantity and Actions */}
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-semibold text-gray-900">
                    Quantity:
                  </span>
                  <div className="flex items-center border-2 border-gray-200 rounded-xl">
                    <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                      -
                    </button>
                    <span className="px-4 py-2 border-x-2 border-gray-200 bg-gray-50 font-semibold">
                      1
                    </span>
                    <button className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-2xl hover:from-blue-700 hover:to-blue-800 transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Add to Cart
                  </button>
                  <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-bold rounded-2xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-200">
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Additional Info */}
              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">SKU:</p>
                    <p className="text-gray-600">
                      #{product._id?.slice(-8).toUpperCase()}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 mb-1">
                      Category:
                    </p>
                    <p className="text-gray-600">Electronics</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
