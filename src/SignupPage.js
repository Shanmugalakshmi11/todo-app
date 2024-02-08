// SignupPage.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignupPage.css";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [formErrors, setFormErrors] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (event) => {
    event.preventDefault();

    // Perform form validation
    const errors = validateForm(formData);
    setFormErrors(errors);

    // If no validation errors, proceed with signup logic
    if (Object.values(errors).every((error) => error === "")) {
      // Perform signup logic (e.g., send data to server)

      // Redirect to the login page after successful signup
      // You can use Link or any other navigation method here
      window.location.href = "/login";
    }
  };

  const validateForm = (data) => {
    let errors = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    };

    // Add your validation logic here
    if (data.username.trim() === "") {
      errors.username = "Username is required";
    }

    if (data.email.trim() === "") {
      errors.email = "Email is required";
    }

    if (data.password.trim() === "") {
      errors.password = "Password is required";
    }

    if (data.confirmPassword.trim() === "") {
      errors.confirmPassword = "Confirm Password is required";
    } else if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  return (
    <div className="signup-page">
      <header>
        <h1>Create an Account</h1>
      </header>
      <section className="signup-form">
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
            />
            <span className="error">{formErrors.username}</span>
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <span className="error">{formErrors.email}</span>
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <span className="error">{formErrors.password}</span>
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            <span className="error">{formErrors.confirmPassword}</span>
          </div>

          <button type="submit">Sign Up</button>
        </form>
      </section>
      <footer>
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
        <p>&copy; 2024 Your Company</p>
      </footer>
    </div>
  );
};

export default SignupPage;
