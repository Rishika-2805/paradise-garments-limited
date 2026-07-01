import { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";
import "../../styles/Admin.css";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    totalInquiries: 0,
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
      const res = await axios.get("http://localhost:5000/api/inquiry");
      setStats({
        totalInquiries: res.data.length,
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
            <p>--</p>
          </div>

          <div className="card">
            <h3>New Leads</h3>
            <p>--</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;