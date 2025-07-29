import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBusinessesOpen, setIsBusinessesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Our Businesses',
      dropdown: [
        { name: 'Nexgen IT Academy', href: '/nexgen', description: 'Professional IT Training' },
        { name: 'Rithish Farms', href: '/rithishfarms', description: 'Organic Farm Experience' },
        { name: 'Roshan Tiles', href: '/roshantiles', description: 'Premium Tiles & Ceramics' },
        { name: 'Industrial Visits', href: '/industrial-visits', description: 'Educational Tours' },
        { name: 'Roririsoft', href: '/roririsoft', description: 'Software Solutions' },
      ]
    },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">RoririItPark</div>
              <div className="text-xs text-gray-600">Multi-Business Portal</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsBusinessesOpen(true)}
                    onMouseLeave={() => setIsBusinessesOpen(false)}
                  >
                    <button className="flex items-center text-gray-700 hover:text-blue-600 transition-colors duration-200">
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {isBusinessesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block px-4 py-3 hover:bg-gray-50 transition-colors duration-200"
                          >
                            <div className="font-medium text-gray-900">{dropdownItem.name}</div>
                            <div className="text-sm text-gray-600">{dropdownItem.description}</div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 ${
                      isActive(item.href) ? 'text-blue-600 font-medium' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 pt-4 pb-4">
            <div className="space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 ${
                  isActive('/') ? 'text-blue-600 font-medium' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <div className="px-3 py-2 text-gray-900 font-medium">Our Businesses</div>
              {navigation[1].dropdown.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-6 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 ${
                    isActive(item.href) ? 'text-blue-600 font-medium' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;