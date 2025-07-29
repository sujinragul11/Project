import TileCard from '../components/TileCard';

const Products = () => {
  const tileCategories = [
    {
      name: 'Floor Tiles',
      tiles: [
        { image: '/tile1.jpg', title: 'Marble Elegance Collection' },
        { image: '/tile5.jpg', title: 'Stone Texture Series' },
        { image: '/tile6.jpg', title: 'Geometric Patterns' },
        { image: '/tile7.jpg', title: 'Classic Checkerboard' },
      ],
    },
    {
      name: 'Wall Tiles',
      tiles: [
        { image: '/tile2.jpg', title: 'Metro Subway Series' },
        { image: '/tile8.jpg', title: 'Glass Mosaic' },
        { image: '/tile9.jpg', title: 'Textured 3D Tiles' },
        { image: '/tile10.jpg', title: 'Vintage Pattern' },
      ],
    },
    {
      name: 'Outdoor Tiles',
      tiles: [
        { image: '/tile3.jpg', title: 'Wooden Plank Ceramics' },
        { image: '/tile11.jpg', title: 'Slate Effect' },
        { image: '/tile12.jpg', title: 'Anti-Slip Textured' },
        { image: '/tile13.jpg', title: 'Porcelain Pavers' },
      ],
    },
    {
      name: 'Decorative Tiles',
      tiles: [
        { image: '/tile4.jpg', title: 'Mosaic Patterns' },
        { image: '/tile14.jpg', title: 'Hand-painted Art' },
        { image: '/tile15.jpg', title: 'Gold Accent Tiles' },
        { image: '/tile16.jpg', title: 'Custom Designs' },
      ],
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Tile Collections</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our premium selection of tiles for every space and style.
          </p>
        </div>

        {tileCategories.map((category, index) => (
          <div key={index} className="mb-16">
            <h2 className="text-2xl font-bold mb-6 border-b pb-2 border-gray-200">
              {category.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.tiles.map((tile, tileIndex) => (
                <TileCard
                  key={tileIndex}
                  image={tile.image}
                  title={tile.title}
                  category={category.name}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="bg-gray-50 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer custom tile solutions tailored to your specific needs. Contact us to discuss your project.
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition duration-300"
          >
            Request Custom Tiles
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;