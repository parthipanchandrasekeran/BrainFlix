import React from "react";
import viewicon from "../../assets/Icons/views.svg";
import likesicon from "../../assets/Icons/likes.svg";

function VideoDetails(props) {
  return (
    <div className="video-details-container">
      <div className="video-details-container__heading-container">
        <h1 className="video-details-container__heading">
          {props.details.title}
        </h1>
      </div>
      <section className="video-details-container__details-container">
        <div className="video-details-container__left-section">
          <p className="video-details-container__channel-name">
            By&nbsp;
            {props.details.channel}
          </p>
          <p className="video-details-container__time-stamp">{props.date}</p>
        </div>
        <div className="video-details-container__right-section">
          <div className="video-details-container__views-container">
            <img
              className="video-details-container__view-icon"
              src={viewicon}
            ></img>
            <p className="video-details-container__views-info">
              {props.details.views}
            </p>
          </div>
          <div className="video-details-container__likes-container">
            <img
              className="video-details-container__likes-icon"
              src={likesicon}
            ></img>
            <p className="video-details-container__likes-info">
              {props.details.likes}
            </p>
          </div>
        </div>
      </section>
      <section className="video-details-container__video-information-main-container">
        <p className="video-details-container__video-information">
          {props.details.description}
        </p>
      </section>
    </div>
  );
}

export default VideoDetails;
