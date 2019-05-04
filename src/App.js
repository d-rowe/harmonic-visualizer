import React from "react";
import Wave from "./components/wave";
import "bulma/css/bulma.css";
import "./App.css";

function App() {
  return (
    <div>
      <nav className="navbar is-black">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item navbar-center subtitle">
              harmonic series
            </a>
          </div>
        </div>
      </nav>
      {/* <h1 className="title has-text-centered">harmonic series</h1> */}
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
      </div>
    </div>
  );
}

export default App;
