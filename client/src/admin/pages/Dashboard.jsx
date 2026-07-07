import { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";
import "../../styles/Admin.css";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalInquiries: 0,
    totalProducts: 0
  });

  useEffect(() => {
    const token = localStorage.getItem("adminToken");

    if (!token) {
      alert("Not authorized");
      window.location.href = "/admin/login";
    } else {
      fetchStats();
    }
  }, []);

  const fetchStats = async () => {
  try {
    // 🔹 GET INQUIRIES
   const token = localStorage.getItem("adminToken");

const inquiryRes = await axios.get(
  "http://localhost:5000/api/inquiry",
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);

const productRes = await axios.get(
  "http://localhost:5000/api/products",
  {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
);
    // 🔹 SET BOTH COUNTS
    setStats({
      totalInquiries: inquiryRes.data.length,
      totalProducts: productRes.data.length
    });

  } catch (err) {
    console.log(err);
  }
};

  return (
    <>
      <AdminNavbar />

      <div className="admin-container">
        <h1>Welcome Admin 👋</h1>
        <p>Here’s your business overview</p>

        <div className="stats-grid">
  <div className="card">
    <h3>Total Inquiries</h3>
    <p>{stats.totalInquiries}</p>
  </div>

  <div className="card">
    <h3>Total Products</h3>
    <p>{stats.totalProducts}</p>
  </div>
</div>
</div>
    </>
  );
};

export default AdminDashboard;