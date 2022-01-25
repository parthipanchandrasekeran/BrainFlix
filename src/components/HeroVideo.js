import React, { Component } from "react";
import "../styles/hero-container.scss";

export default class HeroVideo extends Component {
  render() {
    return (
      <div className="Hero-container__main">
        <video
          className="Hero-container__main-video"
          controls
          poster="https://i.imgur.com/l2Xfgpl.jpg"
        >
          No Support for Hero Image
        </video>
      </div>
    );
  }
}
