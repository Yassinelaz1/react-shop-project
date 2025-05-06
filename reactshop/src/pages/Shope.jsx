import { useState } from 'react';
import products from './productlist'

const categories = ['Protein', 'Creatine', 'Amino Acids', 'Pre-Workout'];
const brands = ['Brand A', 'Brand B', 'Brand C', 'Optimum Nutrition'];

const Shope = () => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  const filteredProducts = products.filter((product) =>
    (selectedCategory ? product.category === selectedCategory : true) &&
    (selectedBrand ? product.brand === selectedBrand : true) &&
    (search ? product.name.toLowerCase().includes(search.toLowerCase()) : true)
  );



  return (
    <div className="bg-gradient-to-r min-h-screen flex flex-col items-center justify-center py-1 px-6">
      <img
        src="https://media.cdnws.com/_i/85221/RAW-97829/1951/32/66web-creatine-1920x200a-2048x.jpeg"
        alt="Background"
        className="flex flex-col items-center justify-center  w-full h-48 sm:h-64 md:h-80  lg:h-96 xl:h-[75vh] bg-cover bg-center text-white text-center 
        rounded-3xl shadow-lg px-4 mt-20 " >
        </img>
     
      <div className="shop-container py-12 px-4 mx-auto max-w-screen-xl">
        <h1 className="text-4xl text-black font-bold text-center mb-8">Shop Supplements</h1>
        
        {/* Search Bar */}
        <div className="flex justify-center mb-6">
          <input
            type="text"
            placeholder="Search products..."
            className="w-1/2 px-4 py-2 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex justify-center space-x-8 mb-8">
          <select
            className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none"
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <select
            className="py-2 px-4 rounded-lg border border-gray-300 focus:outline-none"
            onChange={(e) => setSelectedBrand(e.target.value)}
          >
            <option value="">All Brands</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white bg-opacity-80 rounded-lg shadow-lg hover:shadow-xl transform hover:translate-y-1 transition-all duration-300"
              >
                <a href={product.link} className="block p-4 text-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-48 h-48 object-cover mx-auto rounded-md mb-4"
                  />
                  <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                  <p className="text-gray-600">{product.category} - {product.brand}</p>
                  <p className="text-xl text-blue-500">${product.price.toFixed(2)}</p>
                </a>
              </div>
            ))
          ) : (
            <p className="text-white text-center col-span-full">No products found.</p>
          )}
        </div>
      </div>
      </div>

  );
};

export default Shope;
