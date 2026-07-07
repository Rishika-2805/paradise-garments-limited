import { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";
import "../../styles/Admin.css";

const ManageProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
  };

  const deleteProduct = async (id) => {
    try {
     const token = localStorage.getItem("token");

await axios.delete(
  `http://localhost:5000/api/products/${id}`,
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);
      alert("Deleted successfully");
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <AdminNavbar />

      <div className="admin-container">
        <h2>Manage Products</h2>

        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Type</th>
              <th>Description</th>
              <th>sizes</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
  <td>
    {p.images && (
      <img
        src={`http://localhost:5000/${p.images[0]}`}
        width="60"
        alt=""
      />
    )}
  </td>

  <td>{p.name}</td>

  <td>{p.type}</td>

  {/* ✅ DESCRIPTION */}
  <td>{p.description}</td>

  {/* ✅ SIZE OPTIONS (CORRECT WAY) */}
  <td>
    {p.sizeOptions && p.sizeOptions.length > 0 ? (
      p.sizeOptions.map((opt, index) => (
        <div key={index}>
          <strong>{opt.region}:</strong> {opt.sizes.join(", ")}
        </div>
      ))
    ) : (
      "No sizes"
    )}
  </td>

  <td>
    <button onClick={() => deleteProduct(p._id)}>
      Delete
    </button>
  </td>
</tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageProduct;