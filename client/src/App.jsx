import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Inquiry from "./pages/Inquiry";

import AdminLogin from "./admin/pages/Adminlogin";
import AdminDashboard from "./admin/pages/Dashboard";
import AddProduct from "./admin/pages/Addproduct";
import ManageEnquiry from "./admin/pages/manageenquiry";
import ManageProduct from "./admin/pages/Manageproduct";

function App() {
  return (
    <Routes>

      {/* CLIENT PAGES */}
      <Route path="/" element={<><Navbar /><Home /><Footer /></>} />
      <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
      <Route path="/products" element={<><Navbar /><Products /><Footer /></>} />
      <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
      <Route path="/inquiry" element={<><Navbar /><Inquiry /><Footer /></>} />

      {/* ADMIN PAGES */}
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/add-product" element={<AddProduct />} />
      <Route path="/admin/manage-product" element={<ManageProduct />} />
      <Route path="/admin/manage-inquiry" element={<ManageEnquiry />} />

    </Routes>
  );
}

export default App;