// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import ImpressivePage from "./ImpressivePage";
import SignupPage from "./SignupPage";
const App = () => {
  const handleLogin = (username, stayLoggedIn) => {
    // Your login logic here
    console.log(`Logged in as ${username}. Stay Logged In: ${stayLoggedIn}`);
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {/* Add other routes as needed */}
        <Route path="/" element={<ImpressivePage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </Router>
  );
};

export default App;
