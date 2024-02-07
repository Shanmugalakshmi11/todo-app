// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";

const App = () => {
  const handleLogin = (username, stayLoggedIn) => {
    // Your login logic here
    console.log(`Logged in as ${username}. Stay Logged In: ${stayLoggedIn}`);
  };

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        {/* Add other routes as needed */}
      </Switch>
    </Router>
  );
};

export default App;
