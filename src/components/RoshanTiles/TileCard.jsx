const TileCard = ({ image, title, category }) => {
    return (
      <div className="group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition duration-300">
        <div className="relative overflow-hidden h-64">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
            <div>
              <span className="inline-block px-3 py-1 bg-orange-600 text-white text-sm rounded-full mb-2">
                {category}
              </span>
              <h3 className="text-white text-xl font-semibold">{title}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default TileCard;