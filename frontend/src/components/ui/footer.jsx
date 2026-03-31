"use client";
import Link from "next/link";
import { Share2, Heart, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-16">
      <div className="max-w-full mx-auto px-4 md:px-10">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
              About
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  Newsroom
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  Investors
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
              Community
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  Diversity & Belonging
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  Accessibility
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  Forum
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Host */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
              Host
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/create-home"
                  className="hover:text-white transition cursor-pointer"
                >
                  Become a Host
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  Host an experience
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  Community Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm sm:text-base">
              Support
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-white transition cursor-pointer"
                >
                  Report a problem
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-gray-700 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-xs sm:text-sm mb-0">
            <p>© 2024 Airbnb Clone. All rights reserved.</p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="hover:text-white transition cursor-pointer"
              title="Share"
            >
              <Share2 className="h-4 sm:h-5 w-4 sm:w-5" />
            </Link>
            <Link
              href="#"
              className="hover:text-white transition cursor-pointer"
              title="Follow"
            >
              <Heart className="h-4 sm:h-5 w-4 sm:w-5" />
            </Link>
            <Link
              href="#"
              className="hover:text-white transition cursor-pointer"
              title="Contact"
            >
              <Send className="h-4 sm:h-5 w-4 sm:w-5" />
            </Link>
          </div>

          {/* Language & Currency */}
          <div className="flex gap-4 text-xs sm:text-sm">
            <button className="hover:text-white transition cursor-pointer">
              English
            </button>
            <span>•</span>
            <button className="hover:text-white transition cursor-pointer">
              USD
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
