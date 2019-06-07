import React from "react";
import Wave from "./components/wave";
import "bulma/css/bulma.css";
import "./App.css";

function App() {
  return (
      <div className="container has-text-centered">
        <div id="Harmonic">
          <h2 className="subtitle is-4">harmonic series</h2>
          <content>
            The harmonic series represent the naturally occurring pitches that
            can be created on an open string or tube. These intervals can be
            found in the partials on brass instruments or harmonics of string
            instruments. Hover (or click on mobile) on any wave to hear it.
          </content>
          <br />
          <br />
          <Wave harmonic="1" />
          <Wave harmonic="2" />
          <Wave harmonic="3" />
          <Wave harmonic="4" />
          <Wave harmonic="5" />
          <Wave harmonic="6" />
          <Wave harmonic="7" />
          <Wave harmonic="8" />
          <Wave harmonic="9" />
        </div>
        <br/>
        <p>&copy; 2019 <a href="https://danielrowetech.com">daniel rowe</a></p>
      </div>
  );
}

export default App;
