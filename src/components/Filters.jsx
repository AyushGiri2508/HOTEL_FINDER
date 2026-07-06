import { ArrowUpDown, MapPin, Star } from "lucide-react";

function Filters() {
  return (
    <div className="flex justify-center mt-8 px-4">

      <div className="flex flex-wrap gap-4">

        {/* City */}

        <div className="flex items-center gap-2 border rounded-xl px-4 py-3 bg-white shadow-sm">

          <MapPin size={18} className="text-gray-500" />

          <select className="outline-none">

            <option>All Cities</option>

          </select>

        </div>

        {/* Rating */}

        <div className="flex items-center gap-2 border rounded-xl px-4 py-3 bg-white shadow-sm">

          <Star size={18} className="text-yellow-500" />

          <select className="outline-none">

            <option>Rating</option>

          </select>

        </div>

        {/* Sorting */}

        <div className="flex items-center gap-2 border rounded-xl px-4 py-3 bg-white shadow-sm">

          <ArrowUpDown size={18} className="text-gray-500" />

          <select className="outline-none">

            <option>Sort By</option>

          </select>

        </div>

      </div>

    </div>
  );
}

export default Filters;