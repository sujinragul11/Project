const FeatureCard = ({ title, description, icon: Icon }) => {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-orange-600 to-red-600 flex items-center justify-center">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default FeatureCard;