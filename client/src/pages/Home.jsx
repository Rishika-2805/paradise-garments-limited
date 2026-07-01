import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import heroImage from "../assets/hero.jpg";
import { Link } from "react-router-dom";




// Icons
import {
  FaCheckCircle,
  FaPaintBrush,
  FaClock,
  FaRupeeSign,
  FaIndustry,
  FaAward,
  FaCogs,
  FaUsers,
  FaHandsHelping,
  FaDraftingCompass,
  FaTshirt,
  FaSearch,
  FaCut
} from "react-icons/fa";

function Home() {
  const [showMore, setShowMore] = useState(false);
   const navigate = useNavigate();

  const reviews = [
    { name: "A", role: "School Admin", text: "Comfortable and durable uniforms." },
    { name: "B", role: "HR Manager", text: "Professional quality and timely delivery." },
    { name: "C", role: "Factory Supervisor", text: "Strong stitching for daily use." },
    { name: "D", role: "Hospital Admin", text: "Fabric and fit exceeded expectations." },
    { name: "E", role: "Operations Head", text: "Smooth coordination and support." }
  ];

  const visibleReviews = showMore ? reviews : reviews.slice(0, 3);

  return (
    <>
     
     {/* HERO SECTION */}
<section
  className="hero"
  style={{ backgroundImage: `url(${heroImage})` }}
>

  <div className="hero-overlay"></div>

  <div className="hero-content">
    <h1>Crafting quality uniforms for every profession</h1>
    <p>
      We are a dedicated uniform manufacturing company committed to delivering
      high-quality, comfortable, and durable uniforms for schools, corporates,
      and institutions. With attention to detail and timely delivery, we ensure
      every uniform reflects professionalism and pride.
    </p>

    <div className="hero-buttons">
       <button className="primary-btn" onClick={() => navigate("/products")}>
              Explore Products
            </button>
            <button className="secondary-btn" onClick={() => navigate("/Contact")}>
              Enquire Now
            </button>
    </div>
  </div>
</section>

    <section className="shopping-corner">
      
      {/* LEFT TEXT */}
      <div className="shopping-left">
        <h2>Shopping Corner</h2>
        <p>Explore our business solutions</p>

        <Link to="/shop#uniforms" className="shop-now">
          Shop Now →
        </Link>
      </div>

      {/* RIGHT AUTO SCROLL */}
      <div className="shopping-right">
        <div className="scroll-track">
          
          {/* Duplicate images for smooth loop */}
          <Link to="/shop#uniforms" className="shop-card">
            <img src="/images/School uniforms.png" alt="Uniforms" />
            <h4> School Uniforms</h4>
          </Link>

          <Link to="/shop#chemicals" className="shop-card">
            <img src="/images/corporate uniforms.png" alt="Chemicals" />
            <h4>corporate Uniforms</h4>
          </Link>

          <Link to="/shop#education" className="shop-card">
            <img src="/images/Hospital uniforms.png" alt="Education" />
            <h4>Hospital Uniforms</h4>
          </Link>

          {/* repeat for infinite effect */}
          <Link to="/shop#uniforms" className="shop-card">
            <img src="/images/hotel uniforms.png" alt="Uniforms" />
            <h4> Hotel Uniforms</h4>
          </Link>
          <Link to="/shop#uniforms" className="shop-card">
            <img src="/images/workwear uniforms.jpeg" alt="Uniforms" />
            <h4> Workwear Uniforms</h4>
          </Link>
          <Link to="/shop#uniforms" className="shop-card">
            <img src="/images/security uniforms.jpg" alt="Uniforms" />
            <h4> Security and officers Uniforms</h4>
          </Link>

        </div>
      </div>
    </section>




      {/* QUALITY */}
      <section className="quality-modern">
        <h2>Our Quality Philosophy</h2>
        <p className="section-desc">Quality is built into every step.</p>

        <div className="quality-modern-grid">
          <div className="quality-modern-item">
            <FaDraftingCompass className="icon-sm" />
            <h4>Thoughtful Design</h4>
            <p>Comfort meets aesthetics.</p>
          </div>

          <div className="quality-modern-item">
            <FaTshirt className="icon-sm" />
            <h4>Premium Materials</h4>
            <p>Durable and comfortable fabrics.</p>
          </div>

          <div className="quality-modern-item">
            <FaSearch className="icon-sm" />
            <h4>Process Control</h4>
            <p>Strict monitoring.</p>
          </div>

          <div className="quality-modern-item">
            <FaCut className="icon-sm" />
            <h4>Refined Finishing</h4>
            <p>Attention to details.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>

        <div className="testimonial-grid">
          {visibleReviews.map((review, index) => (
            <div className="testimonial-card" key={index}>
              <div className="stars">★★★★★</div>
              <p className="review-text">“{review.text}”</p>
              <h4>{review.name}</h4>
              <span>{review.role}</span>
            </div>
          ))}
        </div>

        <button
          className="see-more-btn"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "See More Reviews"}
        </button>
      </section>
    </>
  );
}

export default Home;


