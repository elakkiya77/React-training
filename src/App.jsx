
import React, { useState } from "react";
import Login from "./login";
import Home from "./home";
import "./App.css";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>

      {isLoggedIn ? (
        <Home onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}

    </div>
  );
}

export default App;
