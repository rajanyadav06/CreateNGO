import React from 'react';
import { FaMoneyBillWave, FaClipboardCheck, FaTachometerAlt, FaUserTie } from 'react-icons/fa'; // FontAwesome icons

const features = [
  {
    title: "Affordable & Transparent",
    icon: <FaMoneyBillWave className="text-blue-400 text-5xl mb-4" />,
  },
  {
    title: "Compliance Assured",
    icon: <FaClipboardCheck className="text-blue-400 text-5xl mb-4" />,
  },
  {
    title: "Simplified & Efficient Process",
    icon: <FaTachometerAlt className="text-blue-400 text-5xl mb-4" />,
  },
  {
    title: "Expert Guidance, On-Time Service",
    icon: <FaUserTie className="text-blue-400 text-5xl mb-4" />,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-white text-center px-4">
      {/* Heading */}
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Us</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Our all-in-one platform and team of experts will help direct you in the right path and ensure that your
        business starts the right way in record time.
      </p>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-blue-50 border border-blue-200 p-6 rounded-xl shadow-sm transform transition duration-300 hover:shadow-lg hover:-translate-y-1 hover:scale-105 cursor-pointer hover:bg-blue-100 hover:border-blue-300"
          >
            {feature.icon}
            <h3 className="font-semibold text-lg mt-2 text-black">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
