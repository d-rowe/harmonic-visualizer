import React from "react";
import { TweenMax, Sine } from "gsap/TweenMax";
import { TimelineMax } from "gsap/TimelineMax";
import "./wave.css";

class Wave extends React.Component {
  constructor(props) {
    super(props);
    this.amplitude = 250;
    this.amplitudeAnimation = this.amplitude;
    this.harmonic = 5;
  }
  componentDidMount() {
    this.draw();
    this.wtl = new TimelineMax({ repeat: -1 });
    this.wtl.add(
      TweenMax.to(this, 1, {
        amplitudeAnimation: -this.amplitude,
        easing: Sine.easeInOut,
        onUpdate: value => {
          this.draw();
        }
      })
    );
    this.wtl.add(
      TweenMax.to(this, 1, {
        amplitudeAnimation: this.amplitude,
        easing: Sine.easeInOut,
        onUpdate: value => {
          this.draw();
        }
      })
    );
  }

  draw() {
    let width = this.refs.contain.clientWidth;
    let path = "M";
    let x, y;
    for (var i = 0; i <= width; i++) {
      let x = i;
      let y =
        300 +
        this.amplitudeAnimation * Math.sin(x / (width / (Math.PI * this.harmonic)));
      path = path.concat(x + "," + y + " L");
    }
    console.log(x, y, path);
    this.refs.path.setAttribute("d", path);
  }

  render() {
    return (
      <div className="contain" ref="contain">
        <svg>
          <path ref="path" d="M10,10 L50,100 L90,50" />
        </svg>
      </div>
    );
  }
}

export default Wave;
