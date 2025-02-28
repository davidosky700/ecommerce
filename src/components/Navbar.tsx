import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, X, User, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const { toggleCart, totalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button 
              className="md:hidden mr-4 text-gray-700"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <a href="/" className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                QuickDealsHub
              </span>
            </a>
          </div>

          <nav className={`
            md:flex md:items-center md:static 
            ${isMobileMenuOpen 
              ? 'absolute top-full left-0 right-0 bg-white shadow-md p-4 flex flex-col space-y-4 animate-fadeIn' 
              : 'hidden'
            }
          `}>
            <a href="#" className="md:mx-4 text-gray-700 hover:text-blue-500 transition-colors">Home</a>
            <a href="#" className="md:mx-4 text-gray-700 hover:text-blue-500 transition-colors">Shop</a>
            <a href="#" className="md:mx-4 text-gray-700 hover:text-blue-500 transition-colors">Categories</a>
            <a href="#" className="md:mx-4 text-gray-700 hover:text-blue-500 transition-colors">Deals</a>
            <a href="#" className="md:mx-4 text-gray-700 hover:text-blue-500 transition-colors">About</a>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-500 transition-colors">
              <Search size={20} />
            </button>
            <button className="text-gray-700 hover:text-blue-500 transition-colors hidden md:block">
              <User size={20} />
            </button>
            <button className="text-gray-700 hover:text-blue-500 transition-colors hidden md:block">
              <Heart size={20} />
            </button>
            <button 
              className="text-gray-700 hover:text-blue-500 transition-colors relative"
              onClick={toggleCart}
            >
              <ShoppingCart size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;