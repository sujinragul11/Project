import { Award, Globe, Shield } from 'react-feather';

const About = () => {
  const stats = [
    { value: '15+', label: 'Years Experience' },
    { value: '5000+', label: 'Projects Completed' },
    { value: '100%', label: 'Satisfied Clients' },
    { value: '50+', label: 'Tile Collections' },
  ];

  const values = [
    {
      title: 'Quality',
      description: 'We source only the highest quality materials from trusted manufacturers worldwide.',
      icon: Award,
    },
    {
      title: 'Integrity',
      description: 'Honest recommendations and transparent pricing for every project.',
      icon: Shield,
    },
    {
      title: 'Innovation',
      description: 'Staying ahead of trends to bring you the latest in tile design and technology.',
      icon: Globe,
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Roshan Tiles</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Premium tiles and ceramics for modern spaces since 2008.
          </p>
        </div>

        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2008, Roshan Tiles began as a small family business with a passion for beautiful spaces.
                What started as a modest tile showroom has grown into one of the region's most trusted names in premium
                tiles and installation services.
              </p>
              <p className="text-gray-700 mb-4">
                Our founder, Rajesh Roshan, brought his vision of combining European design aesthetics with local
                craftsmanship to create unique tile solutions for both residential and commercial spaces.
              </p>
              <p className="text-gray-700">
                Today, we continue this tradition of excellence, serving clients who appreciate quality, design, and
                professional service.
              </p>
            </div>
            <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Company image or founder photo</span>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">By the Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center">
                  <value.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Meet Our Team</h3>
            <p className="text-gray-600 mb-6">
              Our team of tile experts, designers, and installers are passionate about helping you create beautiful
              spaces. Each member brings specialized knowledge and a commitment to customer satisfaction.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition duration-300"
            >
              Contact Our Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;