// src/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        <img src="/images/logo.jpg" alt="Logo" />
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        {/* Add other navigation items as needed */}
      </div>
    </div>
  );
};

export default NavBar;
