import { useState } from "react";
import axios from "axios";
import AdminNavbar from "../components/AdminNavbar";
import "../../styles/Admin.css";

const AddProduct = () => {

  const [form, setForm] = useState({
    name: "",
    type: "",
    description: "",
    region: "",
    sizes: ""
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("adminToken");

    try {
      const formData = new FormData();
      formData.append("designFile", image);

      const uploadRes = await axios.post(
        "http://localhost:5000/upload",
        formData
      );

      const imagePath = uploadRes.data.filePath;
      const sizeArray = form.sizes.split(",");

      await axios.post(
        "http://localhost:5000/api/products",
        {
          name: form.name,
          type: form.type,
          description: form.description,
          images: [imagePath],
          sizeOptions: [
            {
              region: form.region,
              sizes: sizeArray
            }
          ]
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      alert("Product added!");

    } catch (error) {
      console.error(error);
      alert("Error adding product");
    }
  };

  return (
    <>
      <AdminNavbar />

      <div className="admin-container">
        <h2>Add Product</h2>

        <input name="name" placeholder="Name" onChange={handleChange} /><br /><br />
        <input name="type" placeholder="Type" onChange={handleChange} /><br /><br />
        <input name="description" placeholder="Description" onChange={handleChange} /><br /><br />
        <input name="region" placeholder="Region (India, US)" onChange={handleChange} /><br /><br />
        <input name="sizes" placeholder="Sizes (34,36,38)" onChange={handleChange} /><br /><br />

        <input type="file" onChange={handleImage} /><br /><br />

        <button onClick={handleSubmit}>Add Product</button>
      </div>
    </>
  );
};

export default AddProduct;