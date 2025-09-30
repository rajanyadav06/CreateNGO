import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between shadow-md">
      
      {/* Left - Logo */}
      <div className="flex flex-col leading-tight">
        <span className="text-2xl font-bold">
          Create<span className="text-white">NGO</span>
        </span>
        <span className="text-xs text-gray-400">Business Consultants Pvt. Ltd.</span>
      </div>

      {/* Center - Links */}
      <ul className="flex items-center space-x-6">
        <li>
          <a href="#" className="hover:text-blue-400 transition">Home</a>
        </li>
        <li className="relative group">
          <button className="hover:text-blue-400 transition flex items-center gap-1">
            Services
            <span>▾</span>
          </button>
          {/* Dropdown */}
          <div className="absolute hidden group-hover:block bg-gray-800 mt-2 rounded-md shadow-lg">
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Service 1</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Service 2</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-700">Service 3</a>
          </div>
        </li>
        <li>
          <a href="#" className="hover:text-blue-400 transition">Contact Us</a>
        </li>
      </ul>

      {/* Right - Button */}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md">
        Consult An Expert
      </button>
    </nav>
  );
};

export default Navbar;
