"use client";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateHome() {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      title: e.target.title.value,
      location: e.target.location.value,
      price: e.target.price.value,
      image: e.target.image.value,
      description: e.target.description.value,
    };
    console.log("form data", formData);
    const response = await fetch("http://localhost:5000/admin/create-home", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    console.log("Response ", response);
    if (response.ok) {
      console.log("Home created ");
      e.target.reset();
      formData = {};
      router.push("/");
    } else {
      console.log("something went wrong");
    }
  };

  return (
    <>
      <Header />
      <main className="bg-gray-50 min-h-screen">
        {/* Back Button */}
        <div className="sticky top-16 z-40 bg-white border-b">
          <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-10 py-3 sm:py-4">
            <Link href="/">
              <button className="flex items-center text-gray-700 hover:text-rose-500 transition cursor-pointer text-sm sm:text-base">
                <ArrowLeft className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                Back to Homes
              </button>
            </Link>
          </div>
        </div>

        {/* Form Container */}
        <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-10 py-6 md:py-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Create Your Home
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-6 md:mb-8">
            List your property on Airbnb and start earning
          </p>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8"
          >
            {/* Basic Information */}
            <div className="mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 md:mb-6">
                Basic Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-4 md:mb-6">
                {/* Title */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                    Home Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="e.g., Cozy Downtown Apartment"
                    className="w-full border text-black border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 cursor-text"
                    required
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                    Location *
                  </label>
                  <input
                    type="text"
                    name="location"
                    placeholder="e.g., San Francisco, California"
                    className="w-full border text-black border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 cursor-text"
                    required
                  />
                </div>

                {/* Price */}
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                    Price per Night ($) *
                  </label>
                  <input
                    type="number"
                    name="price"
                    placeholder="150"
                    className="w-full border text-black border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 cursor-text"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                    Image Url
                  </label>
                  <input
                    type="text"
                    name="image"
                    placeholder="image.com"
                    className="w-full border text-black border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 cursor-text"
                    required
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                  Description *
                </label>
                <textarea
                  name="description"
                  placeholder="Describe your home, its features, and what makes it special..."
                  rows="5"
                  className="w-full border text-black border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500 cursor-text"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <button
                type="submit"
                className="flex-1 bg-rose-500 hover:bg-rose-600 text-white font-semibold py-2 sm:py-3 rounded-lg transition transform hover:scale-105 cursor-pointer text-sm sm:text-base"
              >
                Create Home
              </button>
              <Link href="/" className="flex-1">
                <button
                  type="button"
                  className="w-full border-2 border-gray-300 text-gray-700 font-semibold py-2 sm:py-3 rounded-lg hover:bg-gray-50 transition cursor-pointer text-sm sm:text-base"
                >
                  Cancel
                </button>
              </Link>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
