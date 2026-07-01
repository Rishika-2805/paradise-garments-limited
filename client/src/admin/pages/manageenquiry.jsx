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
    const res = await axios.get("http://localhost:5000/api/inquiry");

    console.log(res.data);
    setData(res.data);
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
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Product</th>
              <th>Country</th>
              <th>Requirement</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>{item.companyName}</td>
                <td>
                  {item.contactPersonFirstName}{" "}
                  {item.contactPersonLastName}
                </td>
                <td>{item.email}</td>
                <td>{item.phone}</td>
                <td>{item.productInterested}</td>
                <td>{item.country}</td>
                <td>{item.requirements}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageEnquiry;