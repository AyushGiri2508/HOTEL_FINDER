import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";
import HotelCard from "../components/HotelCard";

import hotelApi from "../services/hotelApi";

function Home() {
  const [hotels, setHotels] = useState([]);
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const hotelsPerPage = 32;

  useEffect(() => {
    fetchHotels();
  }, []);

  async function fetchHotels() {
    try {
      const response = await hotelApi.get("/hotels/");

      setHotels(response.data.data);
      setFilteredHotels(response.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (search.trim() === "") {
      setFilteredHotels(hotels);
      setCurrentPage(1);
      return;
    }

    const result = hotels.filter((hotel) =>
      hotel.name.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredHotels(result);
    setCurrentPage(1);
  }, [search, hotels]);

  // Pagination Logic
  const indexOfLastHotel = currentPage * hotelsPerPage;
  const indexOfFirstHotel = indexOfLastHotel - hotelsPerPage;

  const currentHotels = filteredHotels.slice(
    indexOfFirstHotel,
    indexOfLastHotel
  );

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold text-gray-900">
            Find Your Perfect Hotel
          </h1>

          <p className="mt-5 text-xl text-gray-500">
            Explore the best hotels across India.
          </p>
        </div>
      </section>

      {/* Search */}
      <div className="max-w-7xl mx-auto px-6">
        <SearchBar
          search={search}
          setSearch={setSearch}
        />
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 mt-8">
        <Filters />
      </div>

      {/* Cards */}
      {loading ? (
        <Loader />
      ) : (
        <div className="max-w-7xl mx-auto px-6 mt-12 ">

         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pl-10">

            {currentHotels.map((hotel) => (
              <HotelCard
                key={hotel.id}
                hotel={hotel}
              />
            ))}

          </div>

        </div>
      )}

      {/* Pagination */}
      <div className="max-w-7xl mx-auto px-6">
        <Pagination
          totalHotels={filteredHotels.length}
          hotelsPerPage={hotelsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      <Footer />
    </>
  );
}

export default Home;