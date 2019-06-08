import React from "react";
import Wave from "./components/wave";
import "bulma/css/bulma.css";
import "./App.css";

function App() {
  return (
    <section className="hero is-light is-fullheight">
      <div className="hero-head">
        <div className="container">
          <br />
          <h2 className="subtitle is-4 has-text-centered">Harmonic Series</h2>
          <content>
            The harmonic series represent the naturally occurring pitches that
            can be created on an open string or tube. These intervals can be
            found in the partials on brass instruments or harmonics of string
            instruments and are the basis for our musical system. Hover over any
            wave to hear it.
          </content>
        </div>
      </div>
      <div className="hero-body">
        <div className="container">
          <div id="Harmonic">
            <Wave harmonic="1" />
            <Wave harmonic="2" />
            <Wave harmonic="3" />
            <Wave harmonic="4" />
            <Wave harmonic="5" />
            <Wave harmonic="6" />
            <Wave harmonic="7" />
            <Wave harmonic="8" />
            {/* <Wave harmonic="9" /> */}
          </div>
        </div>
      </div>
      <div className="hero-footer has-text-centered">
        <p>
          &copy; 2019 <a href="https://danielrowetech.com">Daniel Rowe</a>
        </p>
      </div>
    </section>
  );
}

export default App;
