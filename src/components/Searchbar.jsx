import { Search } from "lucide-react";

function SearchBar({ search, setSearch }) {
  return (
    <div className="flex justify-center mt-10">

      <div className="w-full max-w-2xl flex items-center bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">

        {/* Search Icon */}
        <div className="px-4">
          <Search className="text-gray-400" size={20} />
        </div>

        {/* Input */}
        <input
          type="text"
          placeholder="Search hotels..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 py-3 text-base outline-none"
        />

        {/* Button */}
        <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-medium transition">
          Search
        </button>

      </div>

    </div>
  );
}

export default SearchBar;