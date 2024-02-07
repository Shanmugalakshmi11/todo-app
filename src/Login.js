// Login.js
import React, { useState } from "react";
import "./Login.css"; // Import the CSS file

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleStayLoggedInChange = (event) => {
    setStayLoggedIn(event.target.checked);
  };

  const handleLogin = () => {
    if (username && password) {
      onLogin(username, stayLoggedIn);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to TodoApp</h2>
      <form>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />

        <label className="stay-logged-in">
          <input
            type="checkbox"
            checked={stayLoggedIn}
            onChange={handleStayLoggedInChange}
          />
          Stay Logged In
        </label>

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
