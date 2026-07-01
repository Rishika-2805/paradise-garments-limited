import "../styles/Contact.css";
import { useState } from "react";
import {
  
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

const Contact = () => {
  const [location, setLocation] = useState("gordons");
  return (
    <section className="contact-container container">
      {/* LEFT */}
      <div className="contact-left">
        <h2>Get In Touch With Us Now!</h2>

        <div className="contact-grid">

          

          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <h4>Email</h4>
            
            <p>managerpom@pgl.com.pg</p>
            <p>managerlae@pgl.com.pg</p>
            <p>mdirector@pgl.com.pg</p>
            <p>  paradisegarmentslimited@gmail.com</p>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <h4>Branch Office</h4>
            <a
              href="https://www.google.com/search?kgmid=%2Fm%2F0h3t0sq&hl=en-IN&q=Gordon&shem=bdsle&shndl=17&source=sh%2Fx%2Fkp%2Fosrp%2Fm1%2F2&kgs=db1e340d83465dd9"
              target="_blank"
              rel="noopener noreferrer"
            >
             Section 430, Allotment 1, Unit 7, Cameron Road,<br />
              opposite labour department building,<br/>
              Gordons, Port Moresby – 121, Papua New Guinea<br/>
              Call: +675 71562694 ,+675 81596584

            </a>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <h4>Head Office</h4>
            <a
              href=" https://www.google.com/search?kgmid=%2Fg%2F11b77g3dhp&hl=en-IN&q=Toptown&shem=bdsle&shndl=17&source=sh%2Fx%2Fkp%2Fosrp%2Fm1%2F2&kgs=19ee21c683bd3a6e"
              target="_blank"
              rel="noopener noreferrer"
            >
             Shop:3, Sect 5, Lot 23, Coronation Drive,<br />
              opposite top town fuel station,<br/>
              Top Town, Lae – 411, Papua New Guinea
              Call: +675 74135949, +675 75753375
            </a>
          </div>

          <div className="contact-item">
            <FaClock className="contact-icon" />
            <h4>Working Hours</h4>
            <p>Mon – Fri</p>
            <p>08:00 AM – 05:00 PM</p>
            <p>Sat</p>
            <p>08:00 AM - 12:00 PM</p>
          </div>

        </div>
      </div>

      {/* RIGHT */}
      <div className="contact-right">
  <h2>Our Locations</h2>

      {/* LOCATION BUTTONS */}
      <div className="map-tabs">
        <button
          className={location === "gordons" ? "active" : ""}
          onClick={() => setLocation("gordons")}
        >
          Gordons
        </button>

        <button
          className={location === "lae" ? "active" : ""}
          onClick={() => setLocation("lae")}
        >
          Lae
        </button>
      </div>

      {/* MAP */}
      <div className="map-container">
        {location === "gordons" ? (
          <>
            <iframe
              src="https://www.google.com/maps?q=Gordons,Port+Moresby,Papua+New+Guinea&output=embed"
              loading="lazy"
            ></iframe>

            <a
              href="https://www.google.com/search?kgmid=%2Fm%2F0h3t0sq&hl=en-IN&q=Gordon"
              target="_blank"
              rel="noopener noreferrer"
              className="map-overlay"
            >
              Open Gordons Location
            </a>
          </>
        ) : (
          <>
            <iframe
              src="https://www.google.com/maps?q=Top+Town,Lae,Papua+New+Guinea&output=embed"
              loading="lazy"
            ></iframe>

            <a
              href="https://www.google.com/search?kgmid=%2Fg%2F11b77g3dhp&hl=en-IN&q=Toptown"
              target="_blank"
              rel="noopener noreferrer"
              className="map-overlay"
            >
              Open Lae Location
            </a>
          </>
        )}
      </div>
    </div>

    </section>
  );
};

export default Contact;

