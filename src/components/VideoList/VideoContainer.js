import React, { Component } from "react";
import HeroVideo from "../HeroVideo";

export default class VideoContainer extends Component {
  render() {
    const videoData = [
      {
        id: "84e96018-4022-434e-80bf-000ce4cd12b8",
        title: "BMX Rampage: 2021 Highlights",
        channel: "Red Cow",
        image: "https://i.imgur.com/l2Xfgpl.jpg",
      },
    ];

    return (
      <div>
        <HeroVideo videoinfo={videoData[0].image} />
      </div>
    );
  }
}
