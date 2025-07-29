const Hero = () => {
    return (
      <section className="relative bg-gray-900 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="max-w-6xl mx-auto px-4 py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Premium <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Tiles & Ceramics</span> for Modern Spaces
            </h1>
            <p className="text-xl mb-8">
              Transform your space with our exquisite collection of designer tiles and professional installation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/products"
                className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition duration-300 text-center"
              >
                Explore Products
              </a>
              <a
                href="/contact"
                className="bg-white text-gray-900 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300 text-center"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;