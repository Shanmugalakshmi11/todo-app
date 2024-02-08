// ImpressivePage.js
import React from "react";
import { Link } from "react-router-dom";
import "./ImpressivePage.css";

const ImpressivePage = () => {
  return (
    <div className="impressive-page">
      <header>
        <h1>Your Impressive Page</h1>
      </header>
      <section className="main-content">
        <div className="feature">
          <h2>Amazing Features</h2>
          <p>
            Explore the incredible features that make our product stand out.
          </p>
        </div>
        <div className="testimonial">
          <h2>What People Say</h2>
          <blockquote>
            "This product has changed my life! I can't imagine living without
            it."
          </blockquote>
          <cite>- Happy Customer</cite>
        </div>
        <div className="cta">
          <h2>Join Us Today</h2>
          <p>
            Become a part of our community and experience a new level of
            excellence.
          </p>
          <Link to="/signup">Sign Up Now</Link>
        </div>
      </section>
      <footer>
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default ImpressivePage;
