import React from 'react';

// --- Data Structure for Cards ---
const requirementCards = [
  {
    icon: '✅', // Checkmark for Legal Recognition
    title: 'Legal Recognition',
    description: 'Official identity to operate lawfully as a registered NGO.',
    iconBgColor: 'bg-blue-100', // Light blue background for icon
    iconColor: 'text-blue-600'
  },
  {
    icon: '🤝', // Handshake for Grants & CSR
    title: 'Eligibility for Grants & CSR',
    description: 'Access to government funding and CSR partnerships.',
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    icon: '📊', // Bar chart for Credibility
    title: 'Enhanced Credibility',
    description: 'Builds trust with donors, stakeholders, and beneficiaries.',
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
  {
    icon: '📄', // Document for Tax Exemptions
    title: 'Tax Exemptions',
    description: 'Avail tax benefits under Income Tax Act for donations and income.',
    iconBgColor: 'bg-blue-100',
    iconColor: 'text-blue-600'
  },
];

// --- Reusable Feature Card Component ---
const RequirementCard = ({ icon, title, description, iconBgColor, iconColor }) => {
  return (
    // Card Container: White background, rounded corners, subtle shadow
    <div className="flex flex-col p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 border border-gray-100">
      
      {/* Icon Wrapper: Light blue background circle */}
      <div className={`flex items-center justify-center w-10 h-10 mb-4 rounded-full ${iconBgColor}`}>
        <span className={`text-xl ${iconColor}`} role="img" aria-label={title}>
          {icon}
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-2 text-xl font-bold text-gray-800">{title}</h3>
      
      {/* Description */}
      <p className="text-base text-gray-600">{description}</p>
    </div>
  );
};

// --- Main Section Component ---
const NgoWhy = () => {
  return (
    <section className="py-16 bg-white rounded-2xl "> {/* Light gray background for the section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Heading */}
        <h2 className="text-4xl font-bold mb-4 text-gray-900">
          Why <span className="text-blue-600">NGO Registration</span> is Required?
        </h2>
        
        {/* Sub-description */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          NGO Registration ensures legal recognition and compliance in India. It is mandatory for societies, trusts, and non-
          profits to operate lawfully. Get registered with our expert consultants.
        </p>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {requirementCards.map((card, index) => (
            <RequirementCard
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              iconBgColor={card.iconBgColor}
              iconColor={card.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NgoWhy;