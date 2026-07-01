import "../styles/footer.css";
import { Link } from "react-router-dom";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* ADDRESS 1 */}
        <div className="footer-column">
          <h4>Address 1</h4>
          <p>
            <FaMapMarkerAlt className="icon" />
            Section 430, Allotment 1,<br />
            Unit 7, Cameron Road,<br />
            Opposite Labour Dept Building,<br />
            Gordons, Port Moresby – 121,<br />
            Papua New Guinea
          </p>

          <p className="footer-contact">
            
            <FaPhoneAlt className="icon" /> +675 71562694
          </p>
        </div>

        {/* ADDRESS 2 */}
        <div className="footer-column">
          <h4>Address 2</h4>
          <p>
            <FaMapMarkerAlt className="icon" />
            Shop: 3, Sect 5, Lot 23,<br />
            Coronation Drive,<br />
            Opposite Top Town Fuel Station,<br />
            Top Town, Lae – 411,<br />
            Papua New Guinea
          </p>

          <p className="footer-contact">
            <FaPhoneAlt className="icon" /> +675 74135949 <br />
            <FaPhoneAlt className="icon" /> +675 75753375
          </p>
        </div>

        {/* QUICK LINKS + EMAIL */}
        <div className="footer-column">
          <h4>Quick Links</h4>
        <ul>
  <li>
    <Link to="/">Home</Link>
  </li>
  <li>
    <Link to="/about">About Us</Link>
  </li>
  <li>
    <Link to="/products">products</Link>
  </li>
  <li>
    <Link to="/contacts">contacts</Link>
  </li>
  <li>
    <Link to="/inquiry">inquiry</Link>
  </li>
</ul>


          <p className="footer-contact email">
            <FaEnvelope className="icon" />
            paradisegarmentslimited@gmail.com <br />
            mdirector@pgl.com.pg
          </p>
        </div>

        {/* SOCIAL */}
        <div className="footer-column">
          <h4>Follow Us</h4>

          <div className="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61590596722817"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/stitchandsew.pvtltd/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://wa.me/67571562694"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        © 2025 Paradise Garment Limited. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;