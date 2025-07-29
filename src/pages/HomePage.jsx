import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Code, Leaf, Building, Users, Laptop, Star } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/RoshanTiles/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import About from './pages/About';
import Contact from './pages/Contact';


const HomePage = () => {
  const businesses = [
    {
      id: 'nexgen',
      name: 'Nexgen IT Academy',
      description: 'Professional IT training with industry-expert instructors',
      icon: Code,
      href: '/nexgen',
      color: 'from-blue-600 to-indigo-600',
      features: ['Full Stack Development', 'Cloud Computing', 'Data Science', 'Cybersecurity']
    },
    {
      id: 'rithishfarms',
      name: 'Rithish Farms',
      description: 'Organic farm experiences and sustainable agriculture',
      icon: Leaf,
      href: '/rithishfarms',
      color: 'from-green-600 to-emerald-600',
      features: ['Organic Tours', 'Farm Stay', 'Fresh Produce', 'Educational Programs']
    },
    {
      id: 'roshantiles',
      name: 'Roshan Tiles',
      description: 'Premium tiles and ceramics for modern spaces',
      icon: Building,
      href: '/roshantiles',
      color: 'from-orange-600 to-red-600',
      features: ['Designer Tiles', 'Custom Solutions', 'Quality Materials', 'Professional Installation']
    },
    {
      id: 'industrial',
      name: 'Industrial Visits',
      description: 'Educational tours for students and professionals',
      icon: Users,
      href: '/industrial-visits',
      color: 'from-purple-600 to-pink-600',
      features: ['Educational Tours', 'Industry Exposure', 'Networking', 'Skill Development']
    },
    {
      id: 'roririsoft',
      name: 'Roririsoft',
      description: 'Custom software solutions for modern businesses',
      icon: Laptop,
      href: '/roririsoft',
      color: 'from-teal-600 to-cyan-600',
      features: ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'Digital Transformation']
    }
  ];

  const stats = [
    { value: '500+', label: 'Students Trained', icon: Users },
    { value: '50+', label: 'Companies Served', icon: Building },
    { value: '10+', label: 'Years Experience', icon: Star },
    { value: '5', label: 'Business Verticals', icon: Code },
  ];

  return (
    <>
      <Helmet>
        <title>RoririItPark - Multi-Business Portal | IT Training, Farms, Tiles & More</title>
        <meta name="description" content="Discover our diverse business portfolio including IT training, organic farms, premium tiles, industrial visits, and software solutions." />
        <meta name="keywords" content="IT training, organic farming, tiles, industrial visits, software development" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Welcome to{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  RoririItPark
                </span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Your gateway to excellence across multiple business verticals - from cutting-edge IT training 
                to sustainable farming and premium construction solutions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="#businesses"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <span>Explore Our Businesses</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/admin"
                className="border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Admin Portal
              </Link>
            </div>
          </div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full text-white mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Businesses Section */}
      <section id="businesses" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Business Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our diverse range of services across multiple industries, 
              each designed to deliver excellence and drive success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {businesses.map((business, index) => (
              <div
                key={business.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${business.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative p-8">
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${business.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                      <business.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                          {business.name}
                        </h3>
                        <p className="text-gray-600 mt-2 leading-relaxed">
                          {business.description}
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {business.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                              <span className="text-sm text-gray-600">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <Link
                        to={business.href}
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-2 transition-all duration-300"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose from our wide range of services and let us help you achieve your goals 
            with our expertise and commitment to excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/nexgen"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Start Learning Today
            </Link>
            <Link
              to="/roririsoft"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Get Software Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;