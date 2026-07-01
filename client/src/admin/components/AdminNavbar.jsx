import { Link, useNavigate } from "react-router-dom";
import "../../styles/AdminNavbar.css";

const AdminNavbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin/login");
  };

  return (
    <div className="admin-navbar">
      <h2>Admin Panel</h2>

      <div className="nav-links">
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/add-product">Add Product</Link>
        <Link to="/admin/manage-product">Products</Link>
        <Link to="/admin/manage-inquiry">Inquiries</Link>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default AdminNavbar;