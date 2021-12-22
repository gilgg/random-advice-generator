import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = () => {
    axios
      .get(`https://api.adviceslip.com/advice`)
      .then((res) => {
        const { advice } = res.data.slip;
        setAdvice(advice);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE</span>
        </button>
      </div>
    </div>
  );
}

export default App;
