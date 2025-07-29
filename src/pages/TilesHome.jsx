import Hero from '../components/Hero';
import FeatureCard from '../components/FeatureCard';
import TileCard from '../components/TileCard';
import Testimonial from '../components/Testimonial';
import { Building, Palette, Hammer, CheckCircle } from 'react-feather';

const Home = () => {
  const features = [
    {
      title: 'Designer Tiles',
      description: 'Exclusive collections curated by top designers for modern and classic spaces.',
      icon: Palette,
    },
    {
      title: 'Custom Solutions',
      description: 'Tailored tile designs to match your unique style and requirements.',
      icon: Building,
    },
    {
      title: 'Quality Materials',
      description: 'Premium materials that ensure durability and timeless beauty.',
      icon: CheckCircle,
    },
    {
      title: 'Professional Installation',
      description: 'Expert installation by certified professionals for perfect results.',
      icon: Hammer,
    },
  ];

  const tiles = [
    {
      image: '/tile1.jpg',
      title: 'Marble Elegance Collection',
      category: 'Floor Tiles',
    },
    {
      image: '/tile2.jpg',
      title: 'Metro Subway Series',
      category: 'Wall Tiles',
    },
    {
      image: '/tile3.jpg',
      title: 'Wooden Plank Ceramics',
      category: 'Outdoor',
    },
    {
      image: '/tile4.jpg',
      title: 'Mosaic Patterns',
      category: 'Decorative',
    },
  ];

  const testimonials = [
    {
      quote: 'Roshan Tiles transformed our entire home with their premium products and professional service.',
      author: 'Sarah Johnson',
      role: 'Homeowner',
    },
    {
      quote: 'The quality and variety of tiles available is unmatched in the market. Highly recommended!',
      author: 'Michael Chen',
      role: 'Interior Designer',
    },
    {
      quote: 'From selection to installation, the team at Roshan Tiles made the process seamless.',
      author: 'David Wilson',
      role: 'Commercial Client',
    },
  ];

  return (
    <div>
      <Hero />
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Roshan Tiles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine quality materials with expert craftsmanship to deliver exceptional results for every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Collections</h2>
            <a
              href="/products"
              className="text-orange-600 font-medium hover:underline"
            >
              View All Products →
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiles.map((tile, index) => (
              <TileCard key={index} {...tile} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and quote for your next project.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
            >
              Get a Quote
            </a>
            <a
              href="/products"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-orange-600 transition duration-300"
            >
              Browse Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;