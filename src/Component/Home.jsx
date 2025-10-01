import React from 'react';
import NGOcover from '../assets/NGOcover.jpg'; // Ensure you have an image at this path or adjust accordingly
import WhyChooseUs from './WhyChooseUs';
import Service from './Service';

const Home = () => {
  return (
    <>
    <div
      className="w-full min-h-screen bg-center bg-cover text-white flex flex-col justify-center items-center px-4 py-8"
      style={{ 
        backgroundImage:`url(${NGOcover})`, // Add actual image path if needed
        backgroundColor: "", // Fallback color
      }}
    >
      {/* Tagline */}
      <p className="text-xs sm:text-sm md:text-base text-blue-400 font-semibold mb-4 text-center">
        One Portal, Complete Legal Solution!
      </p>

      {/* Main Heading */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center leading-snug mb-6 px-2">
        India's Top Rated Professional <br className="hidden sm:block" />
        Services Platform
      </h1>

      {/* Search Bar */}
      <div className="w-full max-w-2xl flex flex-col sm:flex-row bg-white rounded-lg overflow-hidden shadow-lg mb-6">
        <input
          type="text"
          placeholder="Search from our 10+ services..."
          className="flex-grow px-4 py-3 text-black focus:outline-none text-sm sm:text-base"
        />
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 sm:py-0 text-sm sm:text-base">
          Search
        </button>
      </div>

      {/* Popular Searches */}
      <div className="text-center w-full max-w-3xl">
        <p className="text-xs sm:text-sm text-gray-300 mb-4">Popular Searches</p>
        <div className="flex flex-wrap justify-center gap-3">
          {[
            { label: 'NGO Registration', color: 'bg-white' },
            { label: 'Trust Registration', color: 'bg-yellow-300' },
            { label: 'SECTION 8', color: 'bg-white' },
            { label: 'GST Registration', color: 'bg-white' },
          ].map((tag, index) => (
            <span
              key={index}
              className={`${tag.color} text-black px-4 py-2 rounded-md text-xs sm:text-sm hover:scale-105 transition-transform`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    </div>
    <WhyChooseUs />
      <Service />
    </>
  );
};

export default Home;
