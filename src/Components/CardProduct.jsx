import { useNavigate } from "react-router-dom";

function CardProduct({ products = [] }) {
  const navigate = useNavigate();

  if (products.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-6">
        No products found
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 shadow-sm"
        >
          <h3 className="font-semibold text-lg mb-1">
            {product.name}
          </h3>

          <p className="text-sm text-gray-600">
            Category: {product.category}
          </p>

          <p className="text-sm">
            Price: ₹{product.price}
          </p>

          <p className="text-sm">
            Stock: {product.stock}
          </p>
          <p className="text-sm">
            Description: {product.description || "-"}
          </p>

          <button
            onClick={() => navigate(`/edit/${product.id}`)}
            className="mt-3 px-3 py-1 bg-blue-600 text-white rounded cursor-pointer hover:bg-blue-700"
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default CardProduct;
