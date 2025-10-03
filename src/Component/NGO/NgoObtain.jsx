import React from 'react';

// Data for the different organization types
const organizationTypes = [
  {
    name: 'Trusts',
    image: 'https://picsum.photos/seed/trusts/400/250',
    hoverText: 'To form a Trust for charitable or religious purposes.'
  },
  {
    name: 'Societies',
    // FIXED URL for reliability
    image: 'https://picsum.photos/seed/societies/400/250',
    hoverText: 'For groups of individuals promoting art, science, literature, etc.'
  },
  {
    name: 'Section 8 Companies',
    image: 'https://picsum.photos/seed/section8/400/250',
    hoverText: 'Non-profit companies promoting commerce, art, science, research, etc.'
  },
  {
    name: 'Non-Governmental Organizations (NGOs)',
    image: 'https://picsum.photos/seed/ngos/400/250',
    hoverText: 'To gain recognition and operate legally, especially for social causes.'
  },
  {
    name: 'Charitable Institutions',
    image: 'https://picsum.photos/seed/charitable/400/250',
    hoverText: 'Organizations involved in philanthropic activities.'
  },
  {
    name: 'Voluntary Associations',
    image: 'https://picsum.photos/seed/voluntary/400/250',
    hoverText: 'Groups formed voluntarily for common interests, often non-profit.'
  },
];

// Reusable Card Component with Hover Effect
const OrganizationCard = ({ name, image, hoverText }) => {
  return (
    // Card Container
    <div className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-100 cursor-pointer aspect-[4/2.5]">
      
      {/* Background Image */}
      <img 
        src={image} 
        alt={name} 
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out" 
      />

      {/* Hover Overlay - Shows dark background and hoverText */}
      <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-70 transition-opacity duration-300 flex items-end p-6 z-10">
        <p className="text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {hoverText}
        </p>
      </div>

      {/* Default Content (Centered, light text, hides on hover) */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
        {/* The center positioning and white text from your last request are maintained */}
        <span className="text-4xl text-white mb-2">✔️</span> 
        <p className="text-2xl font-semibold text-white">{name}</p> 
      </div>

    </div>
  );
};

// Main Section Component
const NgoObtain = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
          Who Must Obtain an <span className="text-blue-600">NGO Registration Certificate?</span>
        </h2>
        
        {/* Sub-description */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          We are India's leading brand that assists organizations in getting NGO Registration.
        </p>

        {/* Grid of Organization Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizationTypes.map((org, index) => (
            <OrganizationCard 
              key={index}
              name={org.name}
              image={org.image}
              hoverText={org.hoverText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NgoObtain;