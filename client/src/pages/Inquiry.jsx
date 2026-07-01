import { useEffect, useState } from "react";
import "../styles/Inquiry.css";

const Inquiry = () => {

  const [formData, setFormData] = useState({
    companyName: "",
    contactPersonFirstName: "",
    contactPersonMiddleName: "",
    contactPersonLastName: "",
    email: "",
    phone: "",
    country: "",
    productInterested: "",
    customDesignRequired: false,
    requirements: ""
  });

  const [file, setFile] = useState(null);

  // ✅ GET PRODUCT FROM URL
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const productName = params.get("product");

    if (productName) {
      setFormData((prev) => ({
        ...prev,
        productInterested: productName
      }));
    }
  }, []);

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // HANDLE SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        alert("Inquiry submitted successfully");
        console.log(data);

        setFormData({
          companyName: "",
          contactPersonFirstName: "",
          contactPersonMiddleName: "",
          contactPersonLastName: "",
          email: "",
          phone: "",
          country: "",
          productInterested: "",
          customDesignRequired: false,
          requirements: ""
        });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting inquiry");
    }
  };

  return (
    <section className="inquiry-container container">
      <h2>Business Inquiry</h2>
      <p className="subtitle">
        Submit your requirements and our team will contact you
      </p>

      <form className="inquiry-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          required
          value={formData.companyName}
          onChange={handleChange}
        />

        <div className="row">
          <input
            type="text"
            name="contactPersonFirstName"
            placeholder="First Name"
            required
            value={formData.contactPersonFirstName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="contactPersonMiddleName"
            placeholder="Middle Name"
            required
            value={formData.contactPersonMiddleName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="contactPersonLastName"
            placeholder="Last Name"
            required
            value={formData.contactPersonLastName}
            onChange={handleChange}
          />
        </div>

        <div className="row">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            required
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          name="country"
          placeholder="Country"
          required
          value={formData.country}
          onChange={handleChange}
        />

        {/* ✅ AUTO-FILLED PRODUCT */}
        <input
          type="text"
          name="productInterested"
          placeholder="Product Interested"
          value={formData.productInterested}
          onChange={handleChange}
        />

        <label className="checkbox">
          <input
            type="checkbox"
            name="customDesignRequired"
            checked={formData.customDesignRequired}
            onChange={handleChange}
          />
          Custom Design Required
        </label>

        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <textarea
          name="requirements"
          placeholder="Enter your requirements"
          required
          value={formData.requirements}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit Inquiry</button>
      </form>
    </section>
  );
};

export default Inquiry;