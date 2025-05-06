import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/#aboutus');
    setTimeout(() => {
      const section = document.getElementById('aboutus');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <section
      className={`fixed inset-x-0 top-0 z-[999] transition-transform bg-white duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="w-full flex items-center justify-between p-4  shadow-lg rounded-b-lg ">
        <div className="text-black text-2xl font-bold hover:text-gray-200  transition duration-300">
          Get Stronger
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 ">
          <li><a href="/" className="text-black hover:text-gray-300">Home</a></li>
          <li><button onClick={handleAboutClick} className="text-black hover:text-gray-300">About</button></li>
          <li><a href="/shop" className="text-black hover:text-gray-300">Shop</a></li>
          <li><a href="/contact" className="text-black hover:text-gray-300 ">Contact</a></li>
          <button className="text-white hover:text-gray-300 bg-black rotate-0 hover:rotate-12 transition duration-300 rounded-lg ">
            <a href="/signup" className=" hover:text-gray-300 m-2 ">Sign Up</a>

          </button>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute right-0 top-full w-64 bg-black p-4 md:hidden shadow-lg rounded-bl-2xl">
          <ul className="flex flex-col space-y-4 font-semibold items-start">
            <li><a href="/" className="text-white hover:text-gray-300">Home</a></li>
            <li><button onClick={handleAboutClick} className="text-white hover:text-gray-300">About</button></li>
            <li><a href="/shop" className="text-white hover:text-gray-300">Shop</a></li>
            <li><a href="/contact" className="text-white hover:text-gray-300">Contact</a></li>
            <li><a href="/signup" className=" text-white hover:text-gray-300">Sign Up</a></li>
          </ul>
        </div>
        )}
    </section>
  );
};

export default Navbar;
