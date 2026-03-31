"use client";
import { mockHomes } from "@/lib/mockData";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import {
  ArrowLeft,
  Star,
  MapPin,
  Users,
  MountainSnow,
  Wifi,
  ChefHat,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function HomeDetails() {
  const params = useParams();
  const homeId = parseInt(params.id);
  const home = mockHomes.find((h) => h.id === homeId);

  if (!home) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Home not found
            </h1>
            <Link href="/">
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-3 rounded-lg transition">
                Back to Homes
              </button>
            </Link>
          </div>
        </main>
      </>
    );
  }



  return (
    <>
      <Header />
      <main className="bg-white">
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

        {/* Content */}
        <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-10 py-6 md:py-12">
          {/* Image Gallery */}
          {/* <div className="mb-6 md:mb-8">
            <img
              src={home.image}
              alt={home.title}
              className="w-full h-48 sm:h-64 md:h-96 object-cover rounded-lg sm:rounded-xl shadow-lg cursor-pointer hover:opacity-95 transition"
            />
          </div> */}

          {/* Title and Rating */}
          <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {home.title}
              </h1>
              <div className="flex items-center text-gray-600 mb-4 text-sm sm:text-base cursor-pointer hover:text-rose-500 transition">
                <MapPin className="h-4 sm:h-5 w-4 sm:w-5 mr-2" />
                {home.location}
              </div>
            </div>
            <div className="text-left sm:text-right flex-shrink-0">
              <div className="flex items-center mb-2 gap-2">
                <Star className="h-5 sm:h-6 w-5 sm:w-6 fill-yellow-400 text-yellow-400" />
                <span className="text-xl sm:text-2xl font-bold">
                  {home.rating}
                </span>
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                ({home.reviews} reviews)
              </p>
            </div>
          </div>

         

          {/* Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {home.description}
            </p>
           
          </div>


          {/* Pricing and Booking */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Pricing</h2>
            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-4xl font-bold text-gray-900">
                  ${home.price}
                </p>
                <p className="text-gray-600">per night</p>
              </div>
              <button className="bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition transform hover:scale-105">
                Reserve Now
              </button>
            </div>
            <div className="text-sm text-gray-600 space-y-2">
              <div className="flex justify-between">
                <span>Nightly rate</span>
                <span>${home.price}</span>
              </div>
              <div className="flex justify-between">
                <span>7 nights</span>
                <span>${home.price * 7}</span>
              </div>
              <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                <span>Total</span>
                <span className="text-gray-900">${home.price * 7}</span>
              </div>
            </div>
          </div>

          {/* Host Info */}
          <div className="bg-white border rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Meet your host
            </h2>
            <div className="flex items-center">
              <div className="h-16 w-16 rounded-full bg-gray-300 mr-4 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">John Doe</p>
                <p className="text-gray-600">Host since 2020</p>
                <p className="text-sm text-gray-600 mt-1">
                  ⭐ 95% of guests gave a 5-star rating
                </p>
              </div>
            </div>
          </div>

          
        </div>
      </main>
      <Footer />
    </>
  );
}
