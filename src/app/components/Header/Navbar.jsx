"use client";
import React, { useState } from "react";
import { Menu, X, User, ShoppingBag } from "lucide-react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
export default function ResponsiveNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "All Items", href: "/allProducts" },
    ...(session ? [{ name: "Dashboard", href: "/dashboard" }] : []),
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="#"
              className="font-['Pacifico'] text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-indigo-600 transition-all duration-300"
            >
              TechGadgets
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Nav Links */}
            <div className="flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <Link
                  key={link.key || index}
                  href={link.href}
                  className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium relative group"
                >
                  {link.name}
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
                </Link>
              ))}
            </div>

            {/* Auth Buttons */}

            {status === "loading" ? (
              <>
                <span className="flex items-center gap-2">
                  <span className="inline-block w-5 h-5 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin"></span>
                  Loading...
                </span>
              </>
            ) : (
              <>
                {session ? (
                  <>
                    <img
                      className="rounded-full w-10"
                      src={session.user?.image}
                      alt="profile"
                      width={50}
                    />
                    <button
                      onClick={() => signOut()}
                      className=" text-red-600 transition-colors duration-300 font-medium px-4 py-2 rounded-xl bg-red-50 hover:cursor-pointer"
                    >
                      Sign Out
                    </button>
                  </>
                ) : (
                  <Link
                    href={"/api/auth/signin"}
                    className=" text-indigo-600 transition-colors duration-300 font-medium px-4 py-2 rounded-xl bg-indigo-50"
                  >
                    Sign In
                  </Link>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 p-2 rounded-xl hover:bg-indigo-50"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 visible"
              : "max-h-0 opacity-0 invisible overflow-hidden"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-gray-100 bg-white/80 backdrop-blur-sm rounded-b-2xl shadow-lg">
            {/* Mobile Nav Links */}
            {navLinks.map((link, index) => (
              <Link
                key={link.key || index}
                href={link.href}
                className="text-gray-700 hover:text-indigo-600 transition-colors duration-300 font-medium relative group"
              >
                {link.name}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="px-2 pt-4 pb-2 space-y-3 border-t border-gray-100 mt-4">
              <button
                className="w-full text-left px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-300 rounded-xl font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </button>
              <button
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium px-4 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <span className="relative flex items-center justify-center">
                  <User className="w-4 h-4 mr-2" />
                  Register
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}
