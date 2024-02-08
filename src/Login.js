// Login.js
import React, { useState, useEffect } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [stayLoggedIn, setStayLoggedIn] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  // Simulate data fetching on component mount
  useEffect(() => {
    // Replace this with your actual data fetching logic
    const fetchData = async () => {
      try {
        // Simulate fetching user data from a server
        // const response = await fetch("your-api-endpoint");
        // const userData = await response.json();

        // Replace the following line with actual user data
        const userData = {
          name: username,
          image: "images/profile.jpeg",
          cvLink: "images/cv.pdf",
        };

        setUser(userData);
        setLoggedIn(true);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData(); // Call the fetchData function

    // Cleanup function (optional)
    return () => {
      // Cleanup logic (if needed)
    };
  }, []); // The empty dependency array ensures that this effect runs only once on mount

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
      setLoggedIn(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    // Perform any necessary logout actions
    setLoggedIn(false);
  };

  return (
    <div className="login-container">
      {loggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <img
            src={user?.image}
            alt="Profile"
            className="profile-image"
            style={{ width: "200px", height: "auto" }} // Adjust the width as needed
          />
          <p>
            Thanks for logging in! You can view your CV{" "}
            <a href={user?.cvLink} target="_blank" rel="noopener noreferrer">
              here
            </a>
            .
          </p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login to Your App</h2>
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
      )}
    </div>
  );
};

export default Login;
