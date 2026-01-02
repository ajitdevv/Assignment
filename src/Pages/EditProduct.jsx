import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import EditProductForm from "../Components/EditProductForm";
import { ProductContext } from "../context/ProductContext";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, setProducts } = useContext(ProductContext);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="p-6 text-center text-red-600">Product not found</p>;
  }

  const handleSave = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? { ...updatedProduct } : p))
    );

    navigate("/", {
      state: { message: "Product updated successfully ✅" },
    });
  };
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Product</h2>

      <EditProductForm
        product={product}
        onSave={handleSave}
        onCancel={() => navigate("/")}
      />
    </div>
  );
}

export default EditProduct;
