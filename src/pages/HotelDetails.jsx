import { Link, useLocation } from "react-router-dom";
import { Star, MapPin, IndianRupee } from "lucide-react";

function HotelDetails() {
  const location = useLocation();
  const hotel = location.state?.hotel;

  if (!hotel) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <h1 className="text-4xl font-bold mb-6">
          Hotel Not Found
        </h1>

        <Link
          to="/"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen py-10">

      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Hotel Image */}

        <img
          src={hotel.thumbnail}
          alt={hotel.name}
          className="w-full h-[450px] object-cover"
        />

        {/* Content */}

        <div className="p-8">

          <Link
            to="/"
            className="text-blue-600 font-semibold hover:underline"
          >
            ← Back to Hotels
          </Link>

          <div className="flex flex-col lg:flex-row justify-between mt-6 gap-10">

            {/* Left Section */}

            <div className="flex-1">

              <h1 className="text-5xl font-bold text-gray-800">
                {hotel.name}
              </h1>

              <div className="flex items-center gap-6 mt-5">

                <div className="flex items-center gap-2">

                  <Star
                    className="text-yellow-400"
                    fill="#FACC15"
                  />

                  <span className="font-semibold text-lg">
                    {hotel.rating}
                  </span>

                </div>

                <div className="flex items-center gap-2 text-gray-500">

                  <MapPin size={18} />

                  <span>Premium Hotel</span>

                </div>

              </div>

              <div className="mt-8">

                <h2 className="text-2xl font-semibold">
                  Description
                </h2>

                <p className="text-gray-600 leading-8 mt-3">
                  {hotel.description ||
                    "Experience luxury and comfort with world-class amenities, spacious rooms, delicious dining, and excellent hospitality. Perfect for family vacations, business trips, and weekend getaways."}
                </p>

              </div>

            </div>

            {/* Right Section */}

            <div className="w-full lg:w-80">

              <div className="bg-blue-50 rounded-2xl p-6 shadow-md">

                <h3 className="text-gray-600 text-lg">
                  Starting From
                </h3>

                <div className="flex items-center mt-2">

                  <IndianRupee className="text-blue-600" />

                  <span className="text-4xl font-bold text-blue-600">
                    {Number(hotel.price).toFixed(2)}
                  </span>

                </div>

                <p className="text-gray-500 mt-2">
                  Per Night
                </p>

                <button className="w-full mt-8 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl text-lg font-semibold transition">
                  Book Now
                </button>

                <button className="w-full mt-4 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-3 rounded-xl transition">
                  Add to Wishlist
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default HotelDetails;