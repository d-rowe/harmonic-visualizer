import React from "react";
import Wave from "./components/wave";
import "bulma/css/bulma.css";
import "./App.css";

function App() {
  return (
    <div>
      <h1 class="title has-text-centered">harmonic series</h1>
      <div className="App" id="App">
        <Wave harmonic="1" />
        <Wave harmonic="2" />
        <Wave harmonic="3" />
        <Wave harmonic="4" />
        <Wave harmonic="5" />
        <Wave harmonic="6" />
        <Wave harmonic="7" />
        <Wave harmonic="8" />
        <Wave harmonic="9" />
        <Wave harmonic="10" />
        <Wave harmonic="11" />
        <Wave harmonic="12" />
      </div>
    </div>
  );
}

export default App;
