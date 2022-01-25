import React, { Component } from "react";
import "../styles/VideoInfo.scss";

export default class VideoInfo extends Component {
  render() {
    return (
      <div className="video-details-container">
        <h1 className="video-details-container__heading">
          BMX Rampage: 2021 <br />
          Highlights
        </h1>
        <section className="video-details-container__details-container"></section>
      </div>
    );
  }
}
