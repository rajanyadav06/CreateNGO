import React from 'react';

const Home = () => {
  return (
    <div
      className="w-full h-screen bg-center text-white flex flex-col justify-center items-center px-4"
      style={{
        backgroundImage:"", // Replace with your actual background image path
        backgroundColor:"#0000FF", // Fallback color
      }}
    >
      {/* Tagline */}
      <p className="text-sm sm:text-md text-blue-400 font-semibold mb-4 text-center">
        One Portal, Complete Legal Solution!
      </p>

      {/* Main Heading */}
      <h1 className="text-3xl sm:text-5xl font-extrabold text-center leading-tight mb-6">
        India's Top Rated Professional <br /> Services Platform
      </h1>

      {/* Search Bar */}
      <div className="w-full max-w-2xl flex bg-white rounded-lg overflow-hidden shadow-lg mb-6">
        <input
          type="text"
          placeholder="Search from our 100+ services..."
          className="flex-grow px-4 py-3 text-black focus:outline-none"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6">
          Search
        </button>
      </div>

      {/* Popular Searches */}
      <div className="text-center">
        <p className="text-sm text-gray-300 mb-4">Popular Searches</p>
        <div className="flex flex-wrap justify-center gap-3 cursor-pointer">
          <span className="bg-white text-black px-4 py-2 rounded-md text-sm">NGO Registration</span>
          <span className="bg-yellow-300 text-black px-4 py-2 rounded-md text-sm">Trust Registration</span>
          <span className="bg-green-200 text-black px-4 py-2 rounded-md text-sm">Society Registration</span>
          <span className="bg-green-300 text-black px-4 py-2 rounded-md text-sm">12A/80G</span>
          <span className="bg-cyan-200 text-black px-4 py-2 rounded-md text-sm">Niti Aayog</span>
          <span className="bg-white text-black px-4 py-2 rounded-md text-sm">GST Registration</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
