import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Leaf, MapPin, Clock, Users, Star, Heart, Camera } from 'lucide-react';
import axios from 'axios';

const RithishFarms = () => {
  const [packages, setPackages] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [packagesRes, galleryRes] = await Promise.all([
        axios.get('/api/packages'),
        axios.get('/api/gallery/farm')
      ]);
      setPackages(packagesRes.data);
      setGallery(galleryRes.data);
    } catch (error) {
      console.error('Failed to fetch data:', error);
    } finally {
      setLoading(false);
    }
  };

  const features = [
    {
      icon: Leaf,
      title: 'Organic Farming',
      description: 'Experience sustainable and chemical-free agriculture practices'
    },
    {
      icon: Heart,
      title: 'Farm-to-Table',
      description: 'Enjoy fresh, organic meals prepared with farm-grown ingredients'
    },
    {
      icon: Users,
      title: 'Family Friendly',
      description: 'Perfect activities for visitors of all ages and families'
    },
    {
      icon: Camera,
      title: 'Scenic Beauty',
      description: 'Capture beautiful moments in our picturesque countryside setting'
    }
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Rithish Farms - Organic Farm Experience | RoririItPark</title>
        <meta name="description" content="Experience sustainable organic farming at Rithish Farms. Farm tours, organic meals, and educational programs for all ages." />
        <meta name="keywords" content="organic farming, farm tours, sustainable agriculture, farm experience, organic food" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-800 via-green-700 to-emerald-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg')] bg-cover bg-center"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-green-600 bg-opacity-20 backdrop-blur-sm rounded-full px-6 py-2 mb-4">
              <Leaf className="h-5 w-5" />
              <span className="text-sm font-medium">100% Organic & Sustainable</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Rithish Farms
            </h1>
            <p className="text-xl sm:text-2xl text-green-100 max-w-3xl mx-auto leading-relaxed">
              Discover the beauty of sustainable agriculture and experience farm life 
              in our peaceful countryside setting.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="#packages"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                View Packages
              </Link>
              <Link
                to="#gallery"
                className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                View Gallery
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Rithish Farms?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience authentic farm life with our carefully curated programs and activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {gallery.length > 0 && (
        <section id="gallery" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Farm Gallery</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Take a visual tour of our beautiful farm and see what awaits you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.slice(0, 6).map((image) => (
                <div
                  key={image.id}
                  className="group relative aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <img
                    src={image.image_url}
                    alt={image.alt_text || image.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {image.title && (
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-semibold">{image.title}</h3>
                        {image.description && (
                          <p className="text-sm text-gray-300">{image.description}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Farm Experience Packages</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our carefully designed packages for an authentic farm experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg) => {
              const imageUrls = pkg.image_urls ? JSON.parse(pkg.image_urls) : [];
              const includes = pkg.includes ? pkg.includes.split(',').map(item => item.trim()) : [];
              
              return (
                <div
                  key={pkg.id}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                >
                  {imageUrls.length > 0 && (
                    <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                      <img
                        src={imageUrls[0]}
                        alt={pkg.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        {pkg.duration || 'Flexible Duration'}
                      </span>
                      {pkg.max_people && (
                        <div className="flex items-center text-gray-500 text-sm">
                          <Users className="h-4 w-4 mr-1" />
                          Max {pkg.max_people}
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                      {pkg.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {pkg.description}
                    </p>
                    
                    {includes.length > 0 && (
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {includes.slice(0, 3).map((item, idx) => (
                            <li key={idx} className="flex items-center">
                              <Star className="h-3 w-3 text-green-600 mr-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-green-600">
                        ${pkg.price}
                      </div>
                      
                      <Link
                        to={`/rithishfarms/package/${pkg.id}`}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors duration-300"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {packages.length === 0 && (
            <div className="text-center text-gray-600">
              <Leaf className="h-16 w-16 mx-auto mb-4 text-gray-400" />
              <p className="text-lg">No packages available at the moment.</p>
              <p className="text-sm">Please check back later for new offerings.</p>
            </div>
          )}
        </div>
      </section>

      {/* Location & Contact Section */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Visit Our Farm</h2>
              <p className="text-lg text-gray-600 mb-8">
                Located in the heart of countryside, our farm offers a peaceful retreat 
                from city life. Come experience the beauty of sustainable agriculture 
                and connect with nature.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">123 Farm Road, Countryside, State 12345</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Open daily 8:00 AM - 6:00 PM</span>
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+1234567890"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 text-center"
                >
                  Call Now
                </a>
                <a
                  href="mailto:farm@roriri.com"
                  className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-lg transition-colors duration-300 text-center"
                >
                  Email Us
                </a>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/2252718/pexels-photo-2252718.jpeg"
                  alt="Farm landscape"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                <Leaf className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RithishFarms;