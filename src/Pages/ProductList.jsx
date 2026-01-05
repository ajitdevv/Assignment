import { useState, useEffect, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import ProductsTable from "../Components/ProductsTable.jsx";
import CardProduct from "../Components/CardProduct.jsx";
import SearchBar from "../Components/SearchBar.jsx";
import { ProductContext } from "../context/ProductContext.jsx";

function ProductList() {
  const { products } = useContext(ProductContext);

  const [view, setView] = useState("table");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const location = useLocation();
  const [flashMessage, setFlashMessage] = useState("");

  const perPage = 10;

  useEffect(() => {
    if (location.state?.message) {
      setFlashMessage(location.state.message);
    }
  }, [location.state]);

  useEffect(() => {
    if (flashMessage) {
      const timer = setTimeout(() => setFlashMessage(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [flashMessage]);

  // Search debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
      setPage(1);
    }, 500);
    return () => clearTimeout(timer);
  }, [search]);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(debouncedSearch.toLowerCase())
  );

  const start = (page - 1) * perPage;
  const end = page * perPage;

  const showProducts = filteredProducts.slice(start, end);
  const totalPages = Math.ceil(filteredProducts.length / perPage);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <SearchBar search={search} setSearch={setSearch} setPage={setPage} />

        <Link
          to="/add"
          className="px-4 py-2 bg-green-600 text-white rounded cursor-pointer"
        >
          + Add Product
        </Link>
      </div>
      {flashMessage && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
          {flashMessage}
        </div>
      )}
      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setView("table")}
          className={`px-4 hover:scale-110 transition duration-300 py-2 rounded ${
            view === "table" ? "bg-blue-600 text-white" : "border"
          }`}
        >
          Table
        </button>

        <button
          onClick={() => setView("card")}
          className={`px-4 py-2 hover:scale-110 transition duration-300 rounded ${
            view === "card" ? " bg-blue-600 text-white" : "border"
          }`}
        >
          Card
        </button>
      </div>

      {view === "table" ? (
        <ProductsTable products={showProducts} />
      ) : (
        <CardProduct products={showProducts} />
      )}

      {totalPages > 1 && (
        <div className="flex gap-2 justify-center mt-6">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`px-3 py-1 border rounded cursor-pointer ${
                page === p ? "bg-blue-600 text-white" : ""
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductList;
