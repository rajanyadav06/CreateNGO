import React from 'react';

// --- Data Structure for Cards ---
const servicesData = [
  {
    title: "Private Limited Company Registration",
    description: "Establish a legally protected business structure with limited liability under the Companies Act, 2013.",
    linkText: "Read more"
  },
  {
    title: "Public Limited Company Registration",
    description: "Access public funding through share offerings while adhering to SEBI and MCA regulations.",
    linkText: "Read more"
  },
  {
    title: "One Person Company (OPC) Registration",
    description: "Operate a solo venture with limited liability, combining full control and legal compliance.",
    linkText: "Read more"
  },
  {
    title: "Limited Liability Partnership (LLP) Registration",
    description: "Merge partnership flexibility with liability protection, maintaining statutory compliance.",
    linkText: "Read more"
  },
];

// --- Reusable Service Card Component (Tailwind Used Here) ---
const ServiceCard = ({ title, description, linkText }) => {
  return (
    // Card Container: white background, shadow, padding, rounded corners, full height
    <div className="flex flex-col p-6 bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-lg transition duration-300">
      
      {/* Icon/Puzzle Placeholder: Blue circle/square icon */}
      <div className="flex items-center justify-center w-10 h-10 mb-4 text-white bg-blue-500 rounded-lg">
        {/* Placeholder for the puzzle icon (use an actual SVG or image in a real project) */}
        <span className="text-xl">🧩</span> 
      </div>

      {/* Title */}
      <h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3>
      
      {/* Description */}
      <p className="flex-grow mb-6 text-base text-gray-600">{description}</p>
      
      {/* Read More Button */}
      <button 
        className="flex items-center justify-center px-4 py-2 mt-auto text-sm font-medium text-white bg-black rounded-md w-36 hover:bg-gray-800 transition duration-150 cursor-pointer"
        onClick={() => console.log(`Navigating to ${title}`)}
      >
        {linkText} <span className="ml-2">→</span>
      </button>
    </div>
  );
};

// --- Main Section Component (Tailwind Used for Layout) ---
const Service = () => {
  return (
    <section className="px-4 py-16 bg-gray-50 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Content */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl text-center">
            Discover Our Digital Services
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-4xl text-center mx-auto">
            Scale your business effortlessly while staying compliant with TrueX. From incorporation to payroll, we
            offer a wide range of top-tier business services—delivered seamlessly through our intuitive online
            platform. Partner with us for efficiency, accuracy, and growth!
          </p>
        </div>

        {/* Services Grid/Cards Layout */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              linkText={service.linkText}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;