import React, { useState, useEffect } from 'react'; // useEffect import kiya gaya hai
import { Link } from 'react-router-dom';
// react-router-dom se Link ko hata diya gaya hai, aur uski jagah <a> tag use kiya gaya hai

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formOpen, setFormOpen] = useState(false);
  const [message, setMessage] = useState(null); // Custom messages ke liye state

  // Form submission handle karne aur custom message dikhane ke liye function
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage({
      type: 'success',
      text: 'Dhanyawad! Aapka query submit ho gaya hai. Humara expert jald hi aapse sampark karega.', // Message Hindi mein badla gaya
    });
    setFormOpen(false);
    // Yahaan aap aam taur par API submission logic handle karenge
  };
  
  // Custom Modal component
  const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      // Modal background
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={onClose}>
        <div 
          className="bg-white text-black rounded-xl shadow-2xl w-full max-w-sm p-6 relative transform transition-all duration-300 scale-95 opacity-0 animate-fadeIn"
          onClick={(e) => e.stopPropagation()} // Modal ke andar click karne par band hone se rokta hai
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-400 hover:text-black transition-colors"
            aria-label="Close modal"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
          </button>
          {children}
        </div>
      </div>
    );
  };

  // Custom Notification component
  const Notification = ({ message, onDismiss }) => {
    if (!message) return null;
    
    const bgColor = message.type === 'success' ? 'bg-green-500' : 'bg-red-500';

    // Timer set karne ke liye useEffect use kiya gaya hai
    useEffect(() => {
        const timer = setTimeout(() => {
            onDismiss();
        }, 5000);
        return () => clearTimeout(timer);
    }, [message, onDismiss]);

    return (
        <div className={`fixed bottom-4 right-4 ${bgColor} text-white p-4 rounded-lg shadow-xl z-[999] transition-transform duration-300 ease-out animate-slideIn`}>
            <p className="font-semibold">{message.text}</p>
            <button onClick={onDismiss} className="ml-4 font-bold">X</button>
        </div>
    );
  };


  return (
    <>
      <nav className="bg-gray-800 text-white px-6 py-4 shadow-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-col leading-tight cursor-pointer">
            <span className="text-2xl font-bold">
              Create<span className=" text-yellow-400">NGO</span>
            </span>
            <span className="text-xs text-gray-400">
              Business Consultants Pvt. Ltd.
            </span>
          </div>

          {/* Hamburger */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="focus:outline-none p-2 rounded-md hover:bg-gray-800 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center space-x-6">
            {/* Link replaced with <a> */}
            <Link to="/" className="hover:text-blue-400 transition font-medium">
              Home
            </Link>
            
            {/* Services Dropdown - Entire LI element controls the group-hover */}
            <li className="relative group p-2 rounded-md transition-colors hover:bg-gray-800"> 
              <button className="hover:text-blue-400 transition flex items-center gap-1 font-medium">
                Services <span className="text-xs"></span>
              </button>
              
              {/* Dropdown Content */}
              <div className="absolute hidden group-hover:block bg-gray-800 mt-2 left-0 w-48 rounded-lg shadow-2xl z-50 transition-all duration-300 ease-out transform origin-top scale-y-0 group-hover:scale-y-100">
                {/* Links replaced with <a> */}
                <Link to="ngo-registion" className="block px-4 py-2 hover:bg-gray-700 rounded-t-lg">
                  NGO Registration
                </Link>
                <Link to="gst-registion" className="block px-4 py-2 hover:bg-gray-700">
                  GST Registration
                </Link>
                <Link to="section" className="block px-4 py-2 hover:bg-gray-700">
                  SECTION 8
                </Link>
                <Link to="trust" className="block px-4 py-2 hover:bg-gray-700 rounded-b-lg">
                  Trust
                </Link>
              </div>   
            </li>
            {/* Link replaced with <a> */}
            <Link to="contact-us"
              className="hover:text-blue-400 transition font-medium"
            >
              Contact Us
            </Link>
          </ul>

          {/* Right Button */}
          <div className="hidden lg:block">
            <button
              onClick={() => setFormOpen(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition-colors"
            >
              Consult An Expert
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 space-y-4 bg-gray-900 p-4 rounded-lg shadow-inner">
            {/* Link replaced with <a> */}
            <Link to="/" className="block hover:text-blue-400 transition font-medium">
              Home
            </Link>
            {/* Mobile Service Links */}
            <div className="space-y-1">
              <span className="font-semibold block text-gray-300">Services</span>
              <div className="ml-4 space-y-1 border-l border-gray-700 pl-4">
                {/* Links replaced with <a> */}
                <Link to="ngo-registion" className="block text-sm hover:text-blue-400">
                  NGO Registration
                </Link>
                <Link to="gst-registion" className="block text-sm hover:text-blue-400">
                  GST Registration
                </Link>
                <Link to="section" className="block text-sm hover:text-blue-400">
                  SECTION 8
                </Link>
                <Link to="trust" className="block text-sm hover:text-blue-400">
                  Trust
                </Link>
              </div>
            </div>
            {/* Link replaced with <a> */}
            <Link to="contact-us" className="block hover:text-blue-400 transition font-medium">
              Contact Us
            </Link>
            <button
              onClick={() => { setFormOpen(true); setMenuOpen(false); }}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-full transition-colors"
            >
              Consult An Expert
            </button>
          </div>
        )}
      </nav>

      {/* Reusable Modal Form */}
      <Modal isOpen={formOpen} onClose={() => setFormOpen(false)}>
        <h2 className="text-2xl font-bold mb-4 text-center text-blue-600">
          Consult An Expert
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Pura Naam" // Placeholder Hindi mein badla gaya
            required
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
          />
          <textarea
            placeholder="Aapka Sawal" // Placeholder Hindi mein badla gaya
            rows="3"
            className="border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none transition"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors shadow-md"
          >
            Sawal Submit Karein
          </button>
        </form>
      </Modal>

      {/* Submission Notification */}
      <Notification 
        message={message} 
        onDismiss={() => setMessage(null)} 
      />

      {/* Tailwind Animations for Modal and Notification */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out forwards;
          }
          @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slideIn {
            animation: slideIn 0.4s ease-out forwards;
          }
        `}
      </style>
    </>
  );
};

export default Navbar;
