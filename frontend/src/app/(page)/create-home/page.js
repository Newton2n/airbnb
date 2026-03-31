"use client";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CreateHome() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    guests: "",
    description: "",
    amenities: [],
  });

  const amenitiesList = [
    "WiFi",
    "Kitchen",
    "AC",
    "Heating",
    "TV",
    "Parking",
    "Pool",
    "Beach Access",
    "Hot Tub",
    "Gym",
    "Fireplace",
    "Jacuzzi",
    "Roof Deck",
    "Laundry",
    "Mountain View",
    "Workspace",
    "Outdoor Shower",
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAmenityToggle = (amenity) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((a) => a !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Home created successfully! (This is a demo)");
    setFormData({
      title: "",
      location: "",
      price: "",
      bedrooms: "",
      bathrooms: "",
      guests: "",
      description: "",
      amenities: [],
    });
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
                    value={formData.title}
                    onChange={handleChange}
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
                    value={formData.location}
                    onChange={handleChange}
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
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="150"
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
                  value={formData.description}
                  onChange={handleChange}
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
