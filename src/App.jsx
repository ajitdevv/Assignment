import { Routes, Route } from "react-router-dom";
import ProductList from "./Pages/ProductList.jsx";
import AddProduct from "./Pages/AddProduct.jsx";
import EditProduct from "./Pages/EditProduct.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/add" element={<AddProduct />} />
      <Route path="/edit/:id" element={<EditProduct />} />
    </Routes>
  );
}

export default App;
