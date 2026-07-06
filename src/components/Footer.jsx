import { Hotel, Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 mt-16">

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo Section */}
        <div>

          <div className="flex items-center gap-3 mb-5">

            <div className="bg-blue-600 p-3 rounded-xl">
              <Hotel className="text-white" size={28} />
            </div>

            <h2 className="text-3xl font-bold text-white">
              Stay Finder
            </h2>

          </div>

          <p className="text-gray-400 leading-7">
            Stay Finder helps you discover the best luxury,
            business, and budget-friendly hotels across India.
            Plan your next stay with comfort and confidence.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-semibold text-white mb-5">
            Quick Links
          </h3>

          <ul className="space-y-3">

            <li>
              <a href="/" className="hover:text-blue-400 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Explore Hotels
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Wishlist
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400 transition">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-blue-400 transition">
                Contact
              </a>
            </li>

          </ul>

        </div>

        {/* Contact */}

        <div>

          <h3 className="text-xl font-semibold text-white mb-5">
            Contact Us
          </h3>

          <div className="space-y-4">

            <div className="flex items-center gap-3">

              <MapPin className="text-blue-500" size={18} />

              <span>Ghaziabad, Uttar Pradesh, India</span>

            </div>

            <div className="flex items-center gap-3">

              <Phone className="text-blue-500" size={18} />

              <span>+91 98765 43210</span>

            </div>

            <div className="flex items-center gap-3">

              <Mail className="text-blue-500" size={18} />

              <span>support@stayfinder.com</span>

            </div>

          </div>

        </div>

        {/* Social Media */}

        <div>

          <h3 className="text-xl font-semibold text-white mb-5">
            Follow Us
          </h3>

          <div className="flex gap-4">

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition duration-300"
            >
              <FaFacebookF size={18} />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition duration-300"
            >
              <FaInstagram size={18} />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-sky-500 transition duration-300"
            >
              <FaTwitter size={18} />
            </a>

            <a
              href="#"
              className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition duration-300"
            >
              <FaLinkedinIn size={18} />
            </a>

          </div>

          <p className="mt-6 text-sm text-gray-400 leading-6">
            Follow us to get exclusive hotel offers,
            travel tips, and exciting discounts.
          </p>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-gray-700">

        <div className="max-w-7xl mx-auto py-6 px-6 flex flex-col md:flex-row justify-between items-center">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Stay Finder. All Rights Reserved.
          </p>

          <div className="flex gap-6 mt-4 md:mt-0 text-sm">

            <a href="#" className="hover:text-blue-400 transition">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              Help Center
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;