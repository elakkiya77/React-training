
import React, { useState } from "react";
import "./App.css";

export default function App() {

  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "app dark" : "app light"}>

      <div className="dashboard">

        <div className="right">

          <div className="heading">
            <h1>Counter Studio</h1>

            <button className="theme"
              onClick={() => setDark(!dark)}>
              {dark ? "☀ Light Mode" : "☾ Dark Mode"}
            </button>
          </div>

          <p className="label">YOUR CURRENT NUMBER</p>

          <h2>{count}</h2>

          <div className="buttons">

            <button className="inc"
              onClick={() => setCount(count + 1)}>
              + Increment
            </button>

            <button className="dec"
              onClick={() => setCount(count - 1)}>
              − Decrement
            </button>

            <button className="reset"
              onClick={() => setCount(0)}>
              ↻ Reset Counter
            </button>

          </div>

          <p className="status">
            ● Currently using {dark ? "Dark" : "Light"} Theme
          </p>

        </div>

      </div>

    </div>
  );
}
