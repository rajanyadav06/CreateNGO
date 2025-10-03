import React from 'react';
import NgoWhy from './NgoWhy';
import NgoObtain from './NgoObtain';
import NgoPackage from './NgoPackage';

// Features Data
const features = [
  { icon: '📅', text: 'Government-Recognized NGO Registration' },
  { icon: '⏱️', text: 'Expert Review of Documents Within 24-48 Hours' },
];

const FeatureCard = ({ icon, text }) => (
  <div className="flex items-center p-3 bg-gray-900 bg-opacity-70 rounded-lg shadow-xl min-w-[160px] max-w-[250px]">
    <span className="text-xl mr-2">{icon}</span>
    <p className="text-sm font-semibold text-white">{text}</p>
  </div>
);

const Ngo = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  };

  return (
    <section className="relative min-h-screen w-full pt-16 pb-10 bg-gray-900 overflow-hidden">
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-white opacity-10"></div>
      
      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-8">

        {/* LEFT SIDE */}
        <div className="lg:w-3/5 text-white pt-6">
          <p className="text-[11px] sm:text-xs tracking-widest text-blue-300 mb-2">
            MCA Registrar Darpan Mandated Registration Service
          </p>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-4">
            NGO <br /> Registration <br /> Services
          </h1>
          
          <p className="text-sm sm:text-base mb-6 max-w-md text-gray-300">
            Mandatory requirement for NGOs, societies, and trusts to be legally registered
            in order to operate and undertake permissible activities in India.
          </p>

          <div className="flex flex-wrap gap-3 justify-center sm:justify-start mb-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} icon={feature.icon} text={feature.text} />
            ))}
          </div>
          
          <div className="flex items-center p-3 bg-yellow-600 bg-opacity-30 rounded-lg w-fit max-w-xs sm:max-w-md">
            <span className="text-lg mr-2">⭐</span>
            <p className="text-sm sm:text-base font-semibold">
              Trusted by 50,000+ NGOs, Trusts & Societies (Rated 4.9/5 Globally)
            </p>
          </div>
        </div>

        {/* RIGHT SIDE (Form) */}
        <div className="w-full lg:w-2/5 mt-6 lg:mt-0 flex justify-center">
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-md">
            
            {/* Form Header */}
            <div className="bg-blue-600 text-white p-5"> 
              <h2 className="text-lg font-bold">Free NGO Consultation</h2>
              <p className="text-xs">Get expert guidance on starting an NGO.</p>
            </div>
            
            {/* Form */}
            <form className="p-5 space-y-3" onSubmit={handleSubmit}>
              
              {/* Name */}
              <div className="space-y-0.5">
                <label htmlFor="name" className="text-xs font-medium text-gray-700">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Enter your full name" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>

              {/* Email */}
              <div className="space-y-0.5">
                <label htmlFor="email" className="text-xs font-medium text-gray-700">Business Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your email address"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500" 
                />
              </div>

              {/* Phone */}
              <div className="space-y-0.5">
                <label htmlFor="phone" className="text-xs font-medium text-gray-700">Phone</label>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <span className="flex items-center px-3 text-sm text-gray-700 border-r border-gray-300 h-full">
                    🇮🇳 +91
                  </span>
                  <input 
                    type="tel" 
                    id="phone" 
                    placeholder="Your phone number" 
                    className="flex-grow px-3 py-2 text-sm focus:outline-none focus:ring-0 rounded-r-lg" 
                  />
                </div>
              </div>

              {/* State */}
              <div className="space-y-0.5">
                <label htmlFor="state" className="text-xs font-medium text-gray-700">Select State</label>
                <select 
                  id="state" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white pr-8"
                  defaultValue="" 
                >
                  <option value="" disabled>Select your state</option>
                  <option value="UP">Uttar Pradesh</option>
                  <option value="DL">Delhi</option>
                </select>
              </div>

              {/* Submit */}
              <button 
                type="submit" 
                className="w-full flex items-center justify-center py-2.5 text-sm sm:text-base font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-150"
              >
                Get Started Now <span className="ml-2">→</span>
              </button>

              {/* Security Note */}
              <div className="text-center text-[10px] text-gray-500 pt-1">
                <span className="inline-block mr-1">🔒</span> Your information is secure and encrypted
              </div>

            </form>
          </div>
        </div>
      </div>
      
      {/* Other Sections */}
      <NgoWhy />
      <NgoObtain />
      <NgoPackage />
    </section>
  );
};

export default Ngo;
