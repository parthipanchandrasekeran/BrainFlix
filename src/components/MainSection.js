import React, { Component } from "react";
import "../styles/VideoDetails.scss";
import "../styles/hero-container.scss";
import "../styles/commentsSection.scss";
import "../styles/CommentsAdder.scss";
import "../styles/VideoList.scss";
import videodetails from "../data/video-details.json";
import VideoDetails from "./VideoDetails/VideoDetails";
import HeroVideo from "./HeroVideo";
import dateFormatter from "./VideoDetails/dateFormatter";
import Comments from "./Comments/Comments";
import commentCounter from "./Comments/commentCounter";
import CommentDetails from "./Comments/CommentDetails";
import VideoList from "./VideoList/VideoList";
import VideoListHeader from "./VideoList/VideoListHeader";

export default class VideoInfo extends Component {
  state = {
    videoTotalData: videodetails,
  };

  clickHandler = (clickedVideoObject, videoObj, clickedIndex) => {
    const tempVideoArrayList = this.state.videoTotalData;
    const removedVideoArrayList = [];
    removedVideoArrayList.push(this.state.videoTotalData[0]);
    removedVideoArrayList.unshift(clickedVideoObject);

    tempVideoArrayList.splice(clickedIndex, 1, removedVideoArrayList[1]);

    tempVideoArrayList.splice(0, 1, clickedVideoObject);

    this.setState({
      videoTotalData: tempVideoArrayList,
    });
  };

  render() {
    const commentAdderList = this.state.videoTotalData[0].comments.map(
      (comments, index) => {
        return (
          <CommentDetails
            key={comments.timestamp + comments.name + index}
            name={comments.name}
            comment={comments.comment}
            timestamp={dateFormatter(comments.timestamp)}
          />
        );
      }
    );

    const videoAdderList = this.state.videoTotalData.map((comments, index) => {
      if (index > 0) {
        return (
          <VideoList
            key={comments.timestamp + index}
            image={comments.image}
            title={comments.title}
            channel={comments.channel}
            clickedVideoObject={comments}
            clickedIndex={index}
            videoObj={this.state.videoTotalData}
            clickHandler={this.clickHandler}
          />
        );
      }
    });

    return (
      <>
        <HeroVideo mainVideo={this.state.videoTotalData[0].image} />
        <div className="desktop-main">
          <div className="desktop-main__desktop-sub-container">
            <VideoDetails
              details={this.state.videoTotalData[0]}
              key={this.state.videoTotalData[0].id}
              date={dateFormatter(this.state.videoTotalData[0].timestamp)}
            />
            <Comments
              count={commentCounter(this.state.videoTotalData[0].comments)}
            />

            <div>{commentAdderList}</div>
          </div>
          <div className="desktop-main__video-list">
            <VideoListHeader />
            <div>{videoAdderList}</div>
          </div>
        </div>
      </>
    );
  }
}
