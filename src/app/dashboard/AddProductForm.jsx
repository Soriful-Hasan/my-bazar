"use client";
import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import {
  Plus,
  Upload,
  Eye,
  Check,
  AlertCircle,
  Package,
  DollarSign,
  FileText,
  Image as ImageIcon,
} from "lucide-react";

export default function AddProductForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const watchedImage = watch("image");

  // Update image preview when URL changes
  React.useEffect(() => {
    if (watchedImage) {
      setImagePreview(watchedImage);
    }
  }, [watchedImage]);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      const res = await axios.post("api/hotproducts", data);
      setSubmitSuccess(true);
      reset();
      setImagePreview("");
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.log("Error adding data", error.response?.data || error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4">
            <Plus className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Add New Product
          </h1>
          <p className="text-gray-600 text-lg">
            Create and publish your product to the store
          </p>
        </div>

        {/* Success Message */}
        {submitSuccess && (
          <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-2xl flex items-center">
            <Check className="w-5 h-5 text-green-600 mr-3" />
            <span className="text-green-800 font-medium">
              Product added successfully!
            </span>
          </div>
        )}

        <div className="">
          {/* Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                {/* Product Name */}
                <div className="space-y-2">
                  <label className="flex items-center text-gray-800 font-semibold text-lg">
                    <Package className="w-5 h-5 mr-2 text-blue-600" />
                    Product Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      {...register("name", {
                        required: "Product Name is required",
                      })}
                      className={`w-full border-2 rounded-2xl px-4 py-4 text-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
                        errors.name
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-500"
                      }`}
                      placeholder="Enter an amazing product name"
                    />
                  </div>
                  {errors.name && (
                    <div className="flex items-center text-red-600 text-sm mt-2">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.name.message}
                    </div>
                  )}
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <label className="flex items-center text-gray-800 font-semibold text-lg">
                    <FileText className="w-5 h-5 mr-2 text-blue-600" />
                    Description
                  </label>
                  <div className="relative">
                    <textarea
                      rows="4"
                      {...register("description", {
                        required: "Description is required",
                        minLength: {
                          value: 10,
                          message: "Description must be at least 10 characters",
                        },
                      })}
                      className={`w-full border-2 rounded-2xl px-4 py-4 text-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 resize-none ${
                        errors.description
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-500"
                      }`}
                      placeholder="Describe your product in detail..."
                    ></textarea>
                  </div>
                  {errors.description && (
                    <div className="flex items-center text-red-600 text-sm mt-2">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.description.message}
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="space-y-2">
                  <label className="flex items-center text-gray-800 font-semibold text-lg">
                    <DollarSign className="w-5 h-5 mr-2 text-blue-600" />
                    Price (৳)
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      step="0.01"
                      {...register("price", {
                        required: "Price is required",
                        min: {
                          value: 1,
                          message: "Price must be greater than 0",
                        },
                      })}
                      className={`w-full border-2 rounded-2xl px-4 py-4 text-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
                        errors.price
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-500"
                      }`}
                      placeholder="0.00"
                    />
                  </div>
                  {errors.price && (
                    <div className="flex items-center text-red-600 text-sm mt-2">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.price.message}
                    </div>
                  )}
                </div>

                {/* Image URL */}
                <div className="space-y-2">
                  <label className="flex items-center text-gray-800 font-semibold text-lg">
                    <ImageIcon className="w-5 h-5 mr-2 text-blue-600" />
                    Image URL
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      {...register("image", {
                        required: "Image URL is required",
                      })}
                      className={`w-full border-2 rounded-2xl px-4 py-4 text-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
                        errors.image
                          ? "border-red-300 focus:border-red-500"
                          : "border-gray-200 focus:border-blue-500"
                      }`}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>
                  {errors.image && (
                    <div className="flex items-center text-red-600 text-sm mt-2">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.image.message}
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-2"></div>
                      Adding Product...
                    </div>
                  ) : (
                    <div className="flex cursor-pointer items-center justify-center">
                      <Plus className="w-6 h-6 mr-2" />
                      Add Product
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
