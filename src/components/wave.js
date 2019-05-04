import React from "react";
import { TweenMax, Power1 } from "gsap/TweenMax";
import { TimelineMax } from "gsap/TimelineMax";
import Tone from "tone";
import "./wave.css";

class Wave extends React.Component {
  constructor(props) {
    super(props);
    this.amplitude = 30;
    this.amplitudeAnimation = this.amplitude;
    this.harmonic = this.props.harmonic;
    this.speed = 3;
    this.resolution = 5;
    this.color = "hsl(204, 86%, 53%)";
    this.osc = new Tone.Oscillator(261.63 * this.harmonic).toMaster();
    this.osc.volume.value = -20;
  }

  draw() {
    this.width = this.refs.contain.clientWidth;
    let path = "M";
    for (var i = 0; i <= this.width; i = i + this.resolution) {
      let x = i;
      let y =
        40 +
        this.amplitudeAnimation *
          Math.sin(x / (this.width / (Math.PI * this.harmonic)));
      path = path.concat(x + "," + y + " L");
    }
    this.refs.path.setAttribute("d", path);
    this.refs.path.setAttribute("stroke", this.color);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.drawNodes.bind(this));
  }

  componentDidMount() {
    this.refs.path.setAttribute("stroke", "hsl(204, 86%, 53%)");
    window.addEventListener("resize", this.drawNodes.bind(this));
    this.draw();
    this.drawNodes();
    this.wtl = new TimelineMax({ repeat: -1 });
    this.wtl.add(
      TweenMax.to(this, 1, {
        amplitudeAnimation: -this.amplitude,
        ease: Power1.easeInOut,
        onUpdate: () => {
          this.draw();
        }
      })
    );
    this.wtl.add(
      TweenMax.to(this, 1, {
        amplitudeAnimation: this.amplitude,
        ease: Power1.easeInOut,
        onUpdate: () => {
          this.draw();
        }
      })
    );
    this.wtl.duration(this.speed * (1 / this.harmonic));
  }

  drawNodes() {
    if (this.harmonic > 1) {
      let circles = [];
      for (let i = 1; i < this.harmonic; i++) {
        var circle = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "circle"
        );
        circle.setAttribute("cx", (this.width / this.harmonic) * i);
        circle.setAttribute("cy", 40);
        circle.setAttribute("r", 4);
        circles.push(circle);
      }
      for (let i = 0; i < circles.length; i++) {
        this.refs.svg.appendChild(circles[i]);
      }
    }
  }

  hover = () => {
    this.color = "red";
    this.osc.start();
  };

  leave = () => {
    this.color = "hsl(204, 86%, 53%)";
    this.osc.stop();
  };

  render() {
    return (
      <div className="side">
        <div className="vcenter">
          <h2 class="subtitle">{this.harmonic}</h2>
        </div>
        <div
          className="contain"
          ref="contain"
          onMouseEnter={this.hover}
          onMouseLeave={this.leave}
        >
          <svg ref="svg">
            <path ref="path" d="M10,10 L50,100 L90,50" />
          </svg>
        </div>
      </div>
    );
  }
}

export default Wave;
