import { useState } from "react";

function AddProductForm({ onSave, onCancel }) {
  const [form, setForm] = useState({
    name: "",
    price: "",
    stock: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Product name"
        className="w-full border px-3 py-2 rounded"
        required
      />

      <input
        name="price"
        type="number"
        value={form.price}
        onChange={handleChange}
        placeholder="Price"
        className="w-full border px-3 py-2 rounded"
        required
      />

      <input
        name="stock"
        type="number"
        value={form.stock}
        onChange={handleChange}
        placeholder="Stock"
        className="w-full border px-3 py-2 rounded"
        required
      />

      <input
        name="category"
        value={form.category}
        onChange={handleChange}
        placeholder="Category"
        className="w-full border px-3 py-2 rounded"
        required
      />
      <input
        name="description"
        value={form.description}
        onChange={handleChange}
        placeholder="Description"
        className="w-full border px-3 py-2 rounded"
        required
      />

      <div className="flex gap-3">
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer"
        >
          Add
        </button>

        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border rounded cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AddProductForm;
