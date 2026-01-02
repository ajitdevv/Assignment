import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AddProductForm from "../Components/AddProductForm.jsx";
import { ProductContext } from "../context/ProductContext.jsx";

function AddProduct() {
  const navigate = useNavigate();
  const { products, setProducts } = useContext(ProductContext);

  const handleAdd = (newProduct) => {
    setProducts((prev) => [
      ...prev,
      {
        ...newProduct,
        id: prev.length ? prev[prev.length - 1].id + 1 : 1,
      },
    ]);

    navigate("/", {
      state: { message: "Product saved successfully ✅" },
    });
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Add Product</h2>

      <AddProductForm onSave={handleAdd} onCancel={() => navigate("/")} />
    </div>
  );
}

export default AddProduct;
