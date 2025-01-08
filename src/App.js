import React from "react";
import Homepage from "./components/Homepage";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src="./logo.png" alt="Margaret Cezar logo" />
      <header className="App-header">Hello World 🤗</header>

      <About />
      <Homepage />
    </div>
  );
}

export default App;
