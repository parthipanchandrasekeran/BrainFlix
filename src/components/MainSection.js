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
import axios from "axios";

export default class MainSection extends Component {
  state = {
    videoTotalData: videodetails,
  };

  componentDidMount() {
    const API_KEY = "cdbf441b-edda-4ae3-9dbc-993c52c69a5f";
    axios
      .get("https://project-2-api.herokuapp.com/videos?api_key=" + API_KEY)
      .then((response) => {
        console.log(response.data);
      });

    return;
  }

  clickHandler = (clickedVideoObject) => {
    const tempVideoArrayList = this.state.videoTotalData.filter((videoData) => {
      return clickedVideoObject != videoData;
    });
    tempVideoArrayList.unshift(clickedVideoObject);

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
