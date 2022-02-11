import React from "react";

function VideoList({
  image,
  title,
  channel,
  clickedVideoObject,
  clickHandler,
}) {
  return (
    <div className="video-list-main">
      <div className="video-list-main__video-main-container">
        <img
          onClick={() => {
            clickHandler(clickedVideoObject);
          }}
          className="video-list-main__side-video"
          src={image}
        />

        <div className="video-list-main__video-details-main">
          <p className="video-list-main__video-title">{title}</p>
          <p className="video-list-main__video-channel">{channel}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoList;
