import { useState } from "react";
import "../../styles/AdminLogin.css";

const AdminLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {

      const res = await fetch("https://paradise-garments-limited.onrender.com/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const data = await res.json();

      if (res.ok) {
        // Save token
        localStorage.setItem("adminToken", data.token);

        alert("Login successful");

        // Redirect (for now simple)
        window.location.href = "/admin/dashboard";

      } else {
        alert(data.message);
      }

    } catch (error) {
      console.log(error);
      alert("Error logging in");
    }
  };

  return (
  <div className="login-container">
    <div className="login-box">
      <h2>Admin Login</h2>

      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  </div>
);
};

export default AdminLogin;