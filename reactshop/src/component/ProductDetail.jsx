import { useParams } from 'react-router-dom';
import products from '../pages/productlist';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center text-red-500 mt-10">Product not found.</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6  bg-gray-100">
      <img
        src="/back.jpg"
        alt="Background"
        className="absolute w-full h-full object-cover top-0 left-0 z-0"
      />
      <div className="flex flex-col md:flex-row bg-[#ffffff] rounded-2xl shadow-lg p-10 max-w-7xl w-full z-10">
        {/* Image on the left */}
        <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-sm rounded-xl shadow-md"
          />
        </div>

        {/* Info on the right */}
        <div className="md:w-1/2 md:pl-10 ">

          <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
          <p className="text-gray-600 text-lg mb-2">
            <strong>Category:</strong> {product.category}
          </p>
          <p className="text-gray-600 text-lg mb-2">
            <strong>Brand:</strong> {product.brand}
          </p>
          <p className="text-gray-600 text-lg mb-2 max-w-">
            <strong>Description:</strong> {product.description}
          </p>
          <p className="text-blue-500 text-2xl font-semibold mb-6">${product.price.toFixed(2)}</p>
          <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
