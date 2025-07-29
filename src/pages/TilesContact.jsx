import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'react-feather';

const Contact = () => {
  const contactMethods = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: '123 Tile Street, Ceramic City, CC 12345',
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '(123) 456-7890\n(123) 456-7891',
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@roshantiles.com\nsales@roshantiles.com',
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Monday - Friday: 9am - 6pm\nSaturday: 10am - 4pm\nSunday: Closed',
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to start your tile project? Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 mr-4 mt-1">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center">
                      <method.icon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{method.title}</h3>
                    <p className="text-gray-600 whitespace-pre-line">{method.details}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Showroom Location</h3>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Map placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;