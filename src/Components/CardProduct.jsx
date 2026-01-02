function ProductCard({ products = [], onEdit }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 shadow hover:shadow-md transition"
        >
          <h3 className="font-semibold text-lg mb-1">
            {product.name}
          </h3>

          <p className="text-sm text-gray-600 mb-1">
            Category: {product.category}
          </p>

          <p className="text-sm mb-1">Price: ₹{product.price}</p>
          <p className="text-sm mb-1">Stock: {product.stock}</p>

          <p className="text-sm text-gray-700 mb-3">
            {product.description || "-"}
          </p>

          <button
            onClick={() => onEdit(product)}
            className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition hover:cursor-pointer"
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
