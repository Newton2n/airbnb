"use client";
import { UserCircle, Home } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white shadow-md p-3 sm:p-4 md:px-10 border-b gap-2 sm:gap-4">
      {/* Left - Logo */}
      <Link href="/">
        <div className="flex items-center h-10 cursor-pointer hover:opacity-80 transition flex-shrink-0">
          <span className="text-rose-500 font-bold text-xl sm:text-2xl tracking-tight">
            airbnb
          </span>
        </div>
      </Link>

      {/* Center - Browse Homes */}
      <Link href="/" className="flex-1 flex justify-center hidden sm:flex">
        <div className="flex items-center justify-center space-x-2 px-4 sm:px-6 py-2 rounded-full bg-gray-50 border border-gray-200 shadow-sm hover:shadow-md transition cursor-pointer">
          <Home className="h-4 sm:h-5 w-4 sm:w-5 text-rose-500" />
          <span className="text-xs sm:text-sm font-semibold text-gray-800 whitespace-nowrap">
            Browse Homes
          </span>
        </div>
      </Link>

      {/* Right - Host Controls & Profile */}
      <div className="flex items-center space-x-2 sm:space-x-3 justify-end text-gray-600">
        {/* create home Button */}
        <Link href="/create-home">
          <button className="text-xs sm:text-sm font-semibold text-gray-800 hover:text-rose-500 transition px-2 sm:px-4 py-2 cursor-pointer rounded hover:bg-gray-100">
            Create Home
          </button>
        </Link>
        <Link href="/admin-homes">
          <button className="text-xs sm:text-sm font-semibold text-gray-800 hover:text-rose-500 transition px-2 sm:px-4 py-2 cursor-pointer rounded hover:bg-gray-100">
            Admin home
          </button>
        </Link>
        

        {/* Profile Menu Toggle */}
        {/* <div className="flex items-center space-x-2 border border-gray-300 p-1.5 sm:p-2 rounded-full cursor-pointer hover:shadow-md transition bg-white">
          <UserCircle className="h-6 sm:h-8 w-6 sm:w-8 text-gray-400" />
        </div> */}
      </div>
    </nav>
  );
}
