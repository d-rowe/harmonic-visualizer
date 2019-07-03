import React from "react";
import { TweenMax, Power1 } from "gsap/TweenMax";
import { TimelineMax } from "gsap/TimelineMax";
import Tone from "tone";
import "./wave.css";

class Wave extends React.Component {
  constructor(props) {
    super(props);
    this.active = false;
    this.amplitude = 30;
    this.amplitudeAnimation = this.amplitude;
    this.harmonic = this.props.harmonic;
    this.speed = 3;
    this.resolution = 5;
    this.color = "hsl(204, 86%, 53%)";
    this.fill = "hsl(204, 67%, 65%)";
    this.frequency = 116.54 * this.harmonic;
    this.osc = new Tone.Synth({
      oscillator: {
        type: "square"
      },
      envelope: {
        attack: 0.01,
        decay: 0.1,
        sustain: 0.3,
        release: 1
      }
    }).toMaster();
    this.osc.volume.value = -15;
  }

  draw() {
    this.width = this.refs.harmonic.clientWidth;
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
    this.refs.path.setAttribute("fill", this.fill);
  }

  componentWillUnmount() {
    this.osc.triggerRelease();
    this.wtl.stop();
  }

  componentDidMount() {
    this.refs.path.setAttribute("stroke", "hsl(204, 86%, 53%)");
    this.refs.path.setAttribute("fill", "hsl(204, 67%, 65%)");
    this.draw();
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
    // this.wtl.duration(this.speed / 5);
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

  click = () => {
    this.active ? this.stop() : this.play();
  };

  play = () => {
    if (!this.active) {
      this.color = "red";
      this.fill = "lightcoral";
      this.osc.triggerAttack(this.frequency);
      this.active = true;
    }
  };

  stop = () => {
    this.color = "hsl(204, 86%, 53%)";
    this.fill = "hsl(204, 67%, 65%)";
    this.osc.triggerRelease();
    this.active = false;
  };

  render() {
    return (
      <div className="side">
        <div className="vcenter">
          <h2 className="subtitle">{this.harmonic}</h2>
        </div>
        <div
          className="contain"
          ref="harmonic"
          // onMouseEnter={this.play}
          // onMouseLeave={this.stop}
          onClick={this.click}
        >
          <svg ref="svg">
            <path ref="path" className="sinepath" d="M10,10 L50,100 L90,50" />
          </svg>
        </div>
      </div>
    );
  }
}

export default Wave;
