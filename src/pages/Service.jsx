import { ClipboardCheck, Ruler, Truck, Users } from 'react-feather';

const Services = () => {
  const services = [
    {
      title: 'Tile Consultation',
      description: 'Our experts will guide you through the selection process to find the perfect tiles for your space.',
      icon: ClipboardCheck,
    },
    {
      title: 'Precision Measurement',
      description: 'Accurate measurements to ensure you purchase the right quantity and minimize waste.',
      icon: Ruler,
    },
    {
      title: 'Delivery Service',
      description: 'Safe and timely delivery of your tiles directly to your location.',
      icon: Truck,
    },
    {
      title: 'Professional Installation',
      description: 'Certified installers with years of experience for flawless tile installation.',
      icon: Users,
    },
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Consultation',
      description: 'Discuss your project needs with our tile experts.',
    },
    {
      step: '2',
      title: 'Selection',
      description: 'Choose from our wide range of premium tiles.',
    },
    {
      step: '3',
      title: 'Measurement',
      description: 'We take precise measurements of your space.',
    },
    {
      step: '4',
      title: 'Installation',
      description: 'Professional installation by our certified team.',
    },
    {
      step: '5',
      title: 'Completion',
      description: 'Enjoy your beautiful new tiled space!',
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive tile solutions from selection to installation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center">
                <service.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Installation Process</h2>
          <div className="relative">
            <div className="absolute h-full w-0.5 bg-gradient-to-b from-orange-600 to-red-600 left-1/2 transform -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-8 md:space-y-0">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className={`md:w-1/2 p-4 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-md h-full">
                      <span className="inline-block w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 to-red-600 text-white flex items-center justify-center font-bold mb-4">
                        {step.step}
                      </span>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-4 hidden md:block">
                    {index % 2 === 0 ? (
                      <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400">Process illustration {step.step}</span>
                      </div>
                    ) : (
                      <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                        <span className="text-gray-400">Process illustration {step.step}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Tile Project?</h3>
            <p className="mb-6">
              Contact us today to schedule a consultation and get a free estimate for your tile installation.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-orange-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition duration-300"
            >
              Get a Free Estimate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;