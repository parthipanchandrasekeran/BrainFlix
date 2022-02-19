import React, { Component } from "react";

export default class VideoList extends Component {
  render() {
    return (
      <div className="video-list-main">
        <div className="video-list-main__video-main-container">
          <img className="video-list-main__side-video" src={this.props.image} />

          <div className="video-list-main__video-details-main">
            <p className="video-list-main__video-title">{this.props.title}</p>
            <p className="video-list-main__video-channel">
              {this.props.channel}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
