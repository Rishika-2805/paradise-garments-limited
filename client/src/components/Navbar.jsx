import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* LOGO */}
      <div className="logo">
        <Link to="/">
          <img src="/images/logo.png" alt="Paradise Garments Logo" />
        </Link>
      </div>

      {/* NAV LINKS */}
    <ul className="nav-links">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/about">About Us</Link></li>
  <li><Link to="/products">products</Link></li>
  <li><Link to="/contact">Contact Us</Link></li>
  <li><Link to="/inquiry">Inquiry</Link></li>
</ul>


      {/* RIGHT CONTACT */}
      <div className="nav-right">
        <a
          href="https://wa.me/67571562694"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-icon"
        >
          <img src="/images/whatsapp.jpeg" alt="WhatsApp" />
        </a>

        <div className="contact-inf">
          <span>+675 71562694</span>
          <span>paradisegarmentslimited@gmail.com</span>
        </div>

      <a href="/contact" className="enquire-btn">
  Contact now
</a>

      </div>
    </nav>
  );
};

export default Navbar;

