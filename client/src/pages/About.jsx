import "../styles/About.css";

import {
  FaBullseye,
  FaEye,
  FaCheckCircle,
  FaUsers,
  FaBuilding,
  FaMapMarkerAlt,
  //FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="about-page">

      {/* HERO SECTION */}
      <section className="about-hero">
        <div className="overlay">
          <h1>About Us</h1>
          <p>Crafting Quality Uniforms Since 2014</p>
        </div>
      </section>

      {/* DESCRIPTION */}
     <section className="about-description container about-flex">
  <div className="about-text">
    <p>
      <strong>Paradise Garments Limited</strong>, established in 2014, is a
      trusted uniform manufacturing company in Papua New Guinea. We provide
      high-quality uniforms and accessories for schools, corporates,
      industries, healthcare, hospitality, and sports.
    </p>
    <p>
      Our focus is on modern designs, skilled tailoring, and durable fabrics
      that suit the PNG environment. We aim to replace traditional styles
      with contemporary designs while keeping pricing affordable and
      accessible.
    </p>
  </div>

  <div className="about-image">
    <img src="/images/about-us.jpg" alt="Paradise Garments Factory" />
  </div>
</section>

      {/* MISSION & VISION */}
      <section className="mv-section container">
        <div className="mv-card">
          <FaBullseye className="mv-icon" />
          <h3>Our Mission</h3>
          <p>
            To deliver high-quality uniform garments and one-stop services
            including apparel sampling, patterning, grading, and development.
            We strive to satisfy client needs through efficient manufacturing
            and reliable delivery.
          </p>
        </div>

        <div className="mv-card">
          <FaEye className="mv-icon" />
          <h3>Our Vision</h3>
          <p>
            To become a globally recognized and trusted apparel brand by
            continuously evolving with fashion trends, ensuring excellence,
            affordability, and customer satisfaction.
          </p>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="values-section">
        <h2>Our Core Values</h2>

        <div className="values-grid container">
          <div className="value-card">
            <FaCheckCircle />
            <h4>Quality</h4>
            <p>High-quality fabrics and craftsmanship suited for PNG conditions.</p>
          </div>

          <div className="value-card">
            <FaCheckCircle />
            <h4>Reliability</h4>
            <p>We take ownership from production to final delivery.</p>
          </div>

          <div className="value-card">
            <FaCheckCircle />
            <h4>Customer Satisfaction</h4>
            <p>Every order is handled with care and precision.</p>
          </div>

          <div className="value-card">
            <FaCheckCircle />
            <h4>Flexibility</h4>
            <p>Affordable pricing with flexible costing and payment options.</p>
          </div>

          <div className="value-card">
            <FaCheckCircle />
            <h4>Design Variety</h4>
            <p>Wide range of designs with customization options.</p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section container">
        <div className="stat-card">
          <FaUsers />
          <h3>100+</h3>
          <p>Employees</p>
        </div>

        <div className="stat-card">
          <FaBuilding />
          <h3>200+</h3>
          <p>Clients</p>
        </div>

        <div className="stat-card">
          <FaMapMarkerAlt />
          <h3>2</h3>
          <p>Locations in PNG</p>
        </div>
      </section>
      {/* WHY CHOOSE US */}
<section className="why-choose-section">
  <h2>Why Choose Us</h2>
  <p className="subtitle">
    What makes Paradise Garments Limited the preferred choice
  </p>

  <div className="why-grid container">
    <div className="why-card">
      <h4>Experienced Craftsmanship</h4>
      <p>
        Backed by years of industry expertise, our skilled team ensures
        precision tailoring and consistent quality in every garment.
      </p>
    </div>

    <div className="why-card">
      <h4>Customized Solutions</h4>
      <p>
        From fabric selection to final fit, we offer fully customized
        uniforms to match your brand identity and requirements.
      </p>
    </div>

    <div className="why-card">
      <h4>Reliable Delivery</h4>
      <p>
        We value your time. Our streamlined production process ensures
        on-time delivery without compromising on quality.
      </p>
    </div>

    <div className="why-card">
      <h4>Affordable Pricing</h4>
      <p>
        Premium-quality uniforms at competitive prices, designed to fit
        both large organizations and individual clients.
      </p>
    </div>

    <div className="why-card">
      <h4>Ethical & Inclusive Values</h4>
      <p>
        We operate with integrity, inclusiveness, and a strong commitment
        to women empowerment and ethical practices.
      </p>
    </div>

    <div className="why-card">
      <h4>End-to-End Service</h4>
      <p>
        From design and sampling to production and delivery, we manage
        the complete uniform lifecycle under one roof.
      </p>
    </div>
  </div>
</section>


     
    </div>
  );
};

export default About;



