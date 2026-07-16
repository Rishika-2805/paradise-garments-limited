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
    const res = await axios.get("https://paradise-garments-limited.onrender.com/api/products");
    setProducts(res.data);
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`https://paradise-garments-limited.onrender.com/api/products/${id}`);
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
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p) => (
              <tr key={p._id}>
                <td>
                  {p.images && (
                    <img
                      src={`https://paradise-garments-limited.onrender.com/${p.images[0]}`}
                      width="60"
                      alt=""
                    />
                  )}
                </td>
                <td>{p.name}</td>
                <td>{p.type}</td>
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