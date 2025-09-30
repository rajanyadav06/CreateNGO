import React from 'react';

const footerData = [
  {
    title: "START AN NGO",
    links: [
      "NGO Registration",
      "12A & 80G Registration",
      "FCRA Registration",
      "Niti Aayog"
    ]
  },
  {
    title: "NGO COMPLIANCE",
    links: [
      "Accounting",
      "Annual Report",
      "Income Tax Return",
      "Change in An NGO"
    ]
  },
  {
    title: "START A BUSINESS",
    links: [
      "Private Limited Company",
      "Limited Liability Partnership",
      "One Person Company",
      "Partnership Firm"
    ]
  }
];

// Reusable component for the link columns
const FooterColumn = ({ title, links }) => (
  <div className="mb-8 lg:mb-0">
    <h3 className="mb-4 text-sm font-semibold tracking-wider text-blue-500 uppercase border-b-2 border-blue-500 pb-1 w-fit">
      {title}
    </h3>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          {/* Link is white, hovers with a blue underline/text for interaction */}
          <a 
            href="#" 
            className="text-gray-300 transition duration-150 ease-in-out hover:text-blue-400 text-base"
            onClick={(e) => e.preventDefault()} // Prevent actual navigation for this example
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    // Main Footer Container: Black background, padding
    <footer className="bg-black text-white px-4 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:justify-between">
        
        {/* Left Section: Trust Message & Google Reviews */}
        <div className="w-full lg:w-1/3 mb-10 lg:mb-0 pr-8">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
            The Most Trusted Business Registration Professionals
          </h2>
          
          {/* Google Reviews Placeholder */}
          <div className="mt-8">
            <p className="text-xl font-bold">Google</p>
            {/* Stars Placeholder: Replicating the yellow star rating */}
            <div className="text-yellow-500 text-2xl" role="img" aria-label="5 star rating">
              ★★★★★
            </div>
            <p className="text-gray-400 mt-1">Reviews</p>
          </div>
        </div>
        
        {/* Right Section: Link Columns */}
        <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-3 gap-8">
          {footerData.map((section, index) => (
            <FooterColumn 
              key={index}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>
      </div>

      {/* Button Section (Full Width, centered) */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 text-center">
        <button 
          className="px-8 py-3 text-lg font-medium text-white bg-blue-500 rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
          onClick={() => console.log("Clicked 'See all the services'")}
        >
          See all the services
        </button>
      </div>
    </footer>
  );
};

export default Footer;