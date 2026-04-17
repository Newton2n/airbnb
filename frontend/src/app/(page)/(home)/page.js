import Header from "@/components/ui/header";
import ListingCard from "@/components/ui/listing-card";
import Footer from "@/components/ui/footer";
import { mockHomes } from "@/lib/mockData";

export default async function Home() {
  const response = await fetch("http://localhost:5000/admin/get-homes");
  const data = await response.json();
  const homeList = data.homeData;
  

  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex-1 bg-gray-50 min-h-screen">
        <div className="w-full mx-auto px-3 sm:px-4 md:px-6 lg:px-10 py-6 sm:py-8 md:py-12">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Explore Homes
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
            Discover amazing places to stay around the world
          </p>

          {/* Listings Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
            {homeList&&
              homeList.map((home) => (
                <ListingCard key={home._id} home={home} admin={false} />
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
