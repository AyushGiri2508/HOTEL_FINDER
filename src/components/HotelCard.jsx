import { Heart, MapPin, Star, Wifi, Car, Coffee } from "lucide-react";
import { Link } from "react-router-dom";

function HotelCard({ hotel }) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

      {/* Image */}
      <div className="relative">

        <img
          src={hotel.thumbnail}
          alt={hotel.name}
          className="w-full h-96 object-cover"
        />

        {/* Rating Badge */}
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full flex items-center gap-1 shadow-md">

          <Star
            size={16}
            className="text-yellow-400"
            fill="#FACC15"
          />

          <span className="font-semibold text-sm">
            {hotel.rating}
          </span>

        </div>

        {/* Wishlist */}

        <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-red-500 hover:text-white transition">

          <Heart size={18} />

        </button>

      </div>

      {/* Body */}

      <div className="p-6">

        <h2 className="text-2xl font-bold text-gray-800 truncate">
          {hotel.name}
        </h2>

        {/* Location */}

        <div className="flex items-center gap-2 mt-3 text-gray-500">

          <MapPin size={18} />

          <span>Premium Location</span>

        </div>

        {/* Amenities */}

        <div className="flex items-center gap-5 mt-5 text-gray-500">

          <div className="flex items-center gap-1">

            <Wifi size={18} />

            <span className="text-sm">
              WiFi
            </span>

          </div>

          <div className="flex items-center gap-1">

            <Car size={18} />

            <span className="text-sm">
              Parking
            </span>

          </div>

          <div className="flex items-center gap-1">

            <Coffee size={18} />

            <span className="text-sm">
              Breakfast
            </span>

          </div>

        </div>

        <hr className="my-5" />

        {/* Price */}

        <div className="flex justify-between items-center">

          <div>

            <p className="text-sm text-gray-500">
              Starting From
            </p>

            <h2 className="text-3xl font-bold text-red-600">
              ₹ {Number(hotel.price).toFixed(0)}
            </h2>

            <span className="text-gray-500 text-sm">
              Per Night
            </span>

          </div>

          <Link
            to={`/hotel/${hotel.id}`}
            state={{ hotel }}
          >

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition">

              View Details

            </button>

          </Link>

        </div>

      </div>

    </div>
  );
}

export default HotelCard;