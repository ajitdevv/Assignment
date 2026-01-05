import { useNavigate } from "react-router-dom";

function ProductsTable({ products = [] }) {
  const navigate = useNavigate();

  if (products.length === 0) {
    return <p className="text-center text-gray-500 mt-6">No products found</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg">
        <thead className="bg-gray-100">
          <tr className="*:border *:px-4 *:py-2 *:text-left">
            <th>S.No</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Description</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr
              key={product.id}
              className="hover:bg-gray-50 *:border *:px-4 *:py-2"
            >
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>{product.description || "-"}</td>
              <td>{product.stock}</td>
              <td>
                <button
                  onClick={() => {
                    console.log("EDIT CLICKED", product.id);
                    navigate(`/edit/${product.id}`);
                  }}
                  className="px-3 font-bold py-1 bg-blue-600 text-white rounded-2xl hover:bg-blue-800 hover:scale-110 transition duration-300 cursor-pointer"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
