import { Heart, Hotel, Menu, User } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          {/* <div className="bg-blue-100 p-2 rounded-lg">
            <Hotel className="text-blue-600" size={0} />
          </div> */}

          <span className="text-3xl font-bold text-red-600">
            Stay Finder
          </span>
        </Link>

        {/* Middle Menu */}

        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/"
            className="text-blue-600 font-semibold border-b-2 border-blue-600 pb-1"
          >
            Home
          </Link>

          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 duration-200"
          >
            Explore
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 duration-200"
          >
            About
          </a>

          <a
            href="#"
            className="text-gray-600 hover:text-blue-600 duration-200"
          >
            Contact
          </a>

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-6">

          <button className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-red-500 duration-200">

            <Heart size={20} />

            <span>Wishlist</span>

          </button>

          <button className="bg-blue-600 text-white px-1 py-1 rounded-lg flex items-center gap-4 hover:bg-red-700 duration-200">

            <User size={19} />

            Login

          </button>

          <button className="md:hidden">

            <Menu />

          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;