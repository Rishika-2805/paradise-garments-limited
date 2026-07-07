import { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";
import "../../styles/Admin.css";

const ManageEnquiry = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

 const fetchData = async () => {
  try {
    const token = localStorage.getItem("token");
     console.log("TOKEN:",token);

    const res = await axios.get("http://localhost:5000/api/inquiry", {
      headers: {
        Authorization: `Bearer ${token}`
            }
    });
   

    console.log(res.data);
    setData(res.data);
  } catch (err) {
    console.error("ERROR:", err.response?.data || err.message);
  }
};
const updateStatus = async (id, status) => {
  try {
    const token = localStorage.getItem("token");

    await axios.put(
      `http://localhost:5000/api/inquiry/${id}`,
      { status },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    fetchData(); // refresh table
  } catch (err) {
    console.error(err);
  }
};
  return (
    <>
      <AdminNavbar />

      <div className="admin-container">
        <h2>Customer Inquiries</h2>

        <table>
          <thead>
  <tr>
    <th>Company</th>
    <th>Full Name</th>
    <th>Email</th>
    <th>Phone</th>
    <th>Country</th>
    <th>Product</th>
    <th>Custom Design</th>
    <th>Requirement</th>
    <th>Status</th>
    <th>Tracking ID</th>
    <th>Created At</th>
  </tr>
</thead>

          <tbody>
  {data.map((item) => (
    <tr key={item._id}>
      <td>{item.companyName}</td>

      <td>
        {item.contactPersonFirstName}{" "}
        {item.contactPersonMiddleName}{" "}
        {item.contactPersonLastName}
      </td>

      <td>{item.email}</td>
      <td>{item.phone}</td>
      <td>{item.country}</td>
      <td>{item.productInterested}</td>

      <td>
  {item.designFile ? (
    <a
      href={`http://localhost:5000/uploads/${item.designFile}`}
      target="_blank"
      rel="noreferrer"
    >
      View File
    </a>
  ) : (
    "No File"
  )}
</td>

      <td>{item.requirements}</td>

      <td>
 
  <select
    style={{ minWidth: "140px" }}
    value={item.status}
    onChange={(e) => updateStatus(item._id, e.target.value)}
  >
    <option>New</option>
    <option>In Discussion</option>
    <option>Quoted</option>
    <option>Converted To Order</option>
    <option>Closed</option>
  </select>
</td>

      <td>{item.trackingId}</td>

      <td>
        {new Date(item.createdAt).toLocaleString()}
      </td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
    </>
  );
};

export default ManageEnquiry;