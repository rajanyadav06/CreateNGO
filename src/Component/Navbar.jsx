import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
    setFormOpen(false);
  };

  return (
    <>
      <nav className="bg-black text-white px-6 py-4 shadow-md">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col leading-tight">
            <span className="text-2xl font-bold">
              Create<span className=" text-yellow-400">NGO</span>
            </span>
            <span className="text-xs text-gray-400">
              Business Consultants Pvt. Ltd.
            </span>
          </div>

          {/* Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-400 transition">
              Home
            </Link>
            <li className="relative group">
              <button className="hover:text-blue-400 transition flex items-center gap-1">
                Services <span>▾</span>
              </button>
              <div className="absolute hidden group-hover:block bg-gray-800 mt-2 rounded-md shadow-lg z-50">
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                  NGO Registration
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                  SECTION 8
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-700">
                  Trust
                </a>
              </div>
            </li>
            <Link
              to="/contact-us"
              className="hover:text-blue-400 transition"
            >
              Contact Us
            </Link>
          </ul>

          {/* Right Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => setFormOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              Consult An Expert
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 space-y-4">
            <Link to="/" className="block hover:text-blue-400">
              Home
            </Link>
            <div>
              <button className="flex items-center gap-1 hover:text-blue-400">
                Services <span>▾</span>
              </button>
              <div className="ml-4 mt-1 space-y-1">
                <a href="#" className="block text-sm hover:text-gray-300">
                  NGO Registration
                </a>
                <a href="#" className="block text-sm hover:text-gray-300">
                  SECTION 8
                </a>
                <a href="#" className="block text-sm hover:text-gray-300">
                  Trust
                </a>
              </div>
            </div>
            <Link to="/contact-us" className="block hover:text-blue-400">
              Contact Us
            </Link>
            <button
              onClick={() => setFormOpen(true)}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
            >
              Consult An Expert
            </button>
          </div>
        )}
      </nav>

      {/* Modal Form */}
     {formOpen && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
    <div
      className="bg-white text-black rounded-xl shadow-2xl w-96 p-6 relative transform transition-all duration-300 scale-95 opacity-0 animate-fadeIn"
    >
      <button
        onClick={() => setFormOpen(false)}
        className="absolute top-2 right-2 text-gray-600 hover:text-black"
      >
        ✖
      </button>
      <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
        Consult An Expert
      </h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Full Name"
          required
          className="border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          required
          className="border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <textarea
          placeholder="Your Query"
          rows="3"
          className="border p-2 rounded focus:ring-2 focus:ring-blue-400 outline-none"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded font-semibold transition"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
)}

<style>
  {`
    @keyframes fadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    .animate-fadeIn {
      animation: fadeIn 0.3s ease-out forwards;
    }
  `}
</style>


      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
