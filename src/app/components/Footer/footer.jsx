"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Linkedin,
  ArrowRight,
  Shield,
  Truck,
  RotateCcw,
  CreditCard,
  Star,
  Clock,
  Award,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = () => {
    if (email) {
      alert("Thank you for subscribing to our newsletter!");
      setEmail("");
    }
  };

  const quickLinks = [
    { name: "About Us", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Press", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Affiliate Program", href: "#" },
  ];

  const categories = [
    { name: "Smartphones", href: "#" },
    { name: "Laptops", href: "#" },
    { name: "Gaming", href: "#" },
    { name: "Audio", href: "#" },
    { name: "Smart Watches", href: "#" },
    { name: "Cameras", href: "#" },
  ];

  const customerService = [
    { name: "Help Center", href: "#" },
    { name: "Track Your Order", href: "#" },
    { name: "Returns & Exchanges", href: "#" },
    { name: "Shipping Info", href: "#" },
    { name: "Size Guide", href: "#" },
    { name: "Product Care", href: "#" },
  ];

  const policies = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Warranty", href: "#" },
    { name: "Security", href: "#" },
  ];

  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "On orders over $99",
    },
    {
      icon: RotateCcw,
      title: "30-Day Returns",
      description: "Easy return policy",
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "256-bit SSL encryption",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Round-the-clock help",
    },
  ];

  return (
    <footer className="bg-gray-900 mt-20 text-white">
      {/* Features Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{feature.title}</h4>
                    <p className="text-blue-100 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-md"></div>
                  </div>
                  <h3 className="text-2xl font-bold">TechGadgets</h3>
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  Your trusted destination for the latest gadgets, electronics,
                  and tech accessories. We bring you cutting-edge technology
                  from the world's leading brands.
                </p>

                {/* Trust Indicators */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">4.8/5 Rating</span>
                  </div>
                  <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
                    <Award className="w-5 h-5 text-green-400" />
                    <span className="text-sm font-medium">Trusted Seller</span>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">
                      support@techgadgets.com
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">
                      123 Tech Street, Silicon Valley, CA 94025
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Categories</h4>
              <ul className="space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a
                      href={category.href}
                      className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {category.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Support</h4>
              <ul className="space-y-3">
                {customerService.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 pt-12 border-t border-gray-800">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-2xl font-bold mb-2">Stay Updated</h4>
                <p className="text-gray-300 text-lg">
                  Get the latest deals, product launches, and tech news
                  delivered to your inbox.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-6 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <button
                  onClick={handleNewsletterSubmit}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 transform hover:scale-105"
                >
                  Subscribe
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-center lg:text-left">
              <p className="text-gray-400">
                © 2025 TechGadgets. All rights reserved. Made with ❤️ for tech
                enthusiasts.
              </p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-gray-400 mr-2">Follow us:</span>
              {[
                { icon: Facebook, href: "#", color: "hover:text-blue-400" },
                { icon: Twitter, href: "#", color: "hover:text-sky-400" },
                { icon: Instagram, href: "#", color: "hover:text-pink-400" },
                { icon: Youtube, href: "#", color: "hover:text-red-400" },
                { icon: Linkedin, href: "#", color: "hover:text-blue-300" },
              ].map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-xl flex items-center justify-center transition-all duration-200 text-gray-400 ${social.color} transform hover:scale-110`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-6">
              {policies.slice(0, 3).map((policy, index) => (
                <a
                  key={index}
                  href={policy.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                >
                  {policy.name}
                </a>
              ))}
            </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-8 pt-6 border-t border-gray-800 text-center">
            <p className="text-gray-400 text-sm mb-4">We accept</p>
            <div className="flex justify-center items-center gap-4 flex-wrap">
              {[
                "Visa",
                "MasterCard",
                "PayPal",
                "Apple Pay",
                "Google Pay",
                "Crypto",
              ].map((payment, index) => (
                <div
                  key={index}
                  className="bg-gray-800 px-4 py-2 rounded-lg text-gray-300 text-sm font-medium"
                >
                  {payment}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
