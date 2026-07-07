import { useEffect, useState } from "react";
import axios from "axios";

const Products = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/products"
      );

      setProducts(res.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Products</h1>

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((item) => (
          <div
            key={item._id}
            onClick={() => {
              window.location.href = `/inquiry?product=${item.name}`;
            }}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
              width: "250px",
              cursor: "pointer"
            }}
          >
            {/* IMAGE */}
            {item.images && item.images.length > 0 && (
              <img
                src={`http://localhost:5000/${item.images[0]}`}
                alt="product"
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
            )}

            <h3>{item.name}</h3>
            <p>{item.type}</p>
            <p>{item.description}</p>
            {item.sizeOptions && item.sizeOptions.map((opt, index) => (
  <p key={index}>
    <b>{opt.region}:</b> {opt.sizes.join(", ")}
  </p>
))}

          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;