"use client";
import { useRouter } from "next/navigation";
import AdminButton from "./admin-button";
export default function ListingCard({ home, admin }) {
  const router = useRouter();

  const handleCardLink = () => {
    router.push(`/home-details/${home._id}`);
  };

  return (
    <div
      className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer transform hover:scale-105 duration-200 bg-white"
      onClick={handleCardLink}
    >
      {/* Content */}
      <div className="p-3 sm:p-4 cursor-pointer">
        {/* Title and Rating */}
        <div className="flex justify-between items-start mb-2 gap-2">
          <h3 className="font-semibold text-gray-900 line-clamp-2 flex-1 text-sm sm:text-base">
            {home.title}
          </h3>
        </div>

        {/* Location */}
        <p className="text-xs sm:text-sm text-gray-600 mb-1 truncate">
          {home.location}
        </p>

        {/* Price */}
        <div className="flex items-baseline gap-1">
          <span className="text-base sm:text-lg font-bold text-gray-900">
            ${home.price}
          </span>
          <span className="text-xs sm:text-sm text-gray-600">per night</span>
          {admin && <AdminButton homeId={home._id} />}
        </div>
      </div>
    </div>
  );
}
