import React from 'react';

// Data for the NGO Registration Package Checklist
const packageFeatures = [
  'Document Preparation & Verification',
  'Drafting of Trust Deed / MOA',
  'Application Filing with Registrar',
  'Liaison with Authorities',
  'Post-Registration Compliance Guidance',
];

// --- Main Section Component ---
const NgoPackage = () => {
  return (
    // Outer Container with the light blue gradient background
    <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* White Card Container (The main content box) */}
        <div className="flex flex-col lg:flex-row bg-white  p-8 md:p-12 lg:p-16">

          {/* --- LEFT SIDE: Timeline and Description --- */}
          <div className="lg:w-1/2 pr-0 lg:pr-12 mb-8 lg:mb-0">
            
            {/* Main Headline */}
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
              Obtain Your <span className="text-blue-600">NGO Registration Certificate</span> Certificate In 4-6 Weeks
            </h2>
            
            {/* Description Text */}
            <p className="text-lg text-gray-600 mb-8 max-w-md">
              We simplify the entire NGO registration process with dedicated
              consultants, transparent timelines, and 100% compliance assurance.
              Truex Consulting is India's leading NGO Compliance & Registration
              partner.
            </p>

            {/* CTA Button */}
            <button 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-600 transition duration-300"
            >
              Get Started Now <span className="ml-2">→</span>
            </button>
          </div>

          {/* --- RIGHT SIDE: Package Details --- */}
          <div className="lg:w-1/2 pl-0 lg:pl-12 border-t lg:border-t-0 lg:border-l border-gray-200 pt-8 lg:pt-0">
            
            {/* Subheading */}
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our NGO Registration Package
            </h3>

            {/* Checklist */}
            <ul className="space-y-4">
              {packageFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  {/* Checkmark Icon (Blue) */}
                  <span className="text-blue-500 mr-3 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </span>
                  
                  {/* Feature Text */}
                  <p className="text-lg text-gray-700 font-medium">
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default NgoPackage;