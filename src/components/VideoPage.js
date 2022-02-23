import React, { Component } from "react";
import "../styles/VideoDetails.scss";
import "../styles/hero-container.scss";
import "../styles/commentsSection.scss";
import "../styles/CommentsAdder.scss";
import "../styles/VideoList.scss";
import VideoDetails from "./VideoDetails/VideoDetails";
import HeroVideo from "./HeroVideo";
import dateFormatter from "./VideoDetails/dateFormatter";
import Comments from "./Comments/Comments";
import commentCounter from "./Comments/commentCounter";
import CommentDetails from "./Comments/CommentDetails";
import VideoList from "./VideoList/VideoList";
import VideoListHeader from "./VideoList/VideoListHeader";
import axios from "axios";

export default class VideoPage extends Component {
  state = {
    sideVideoList: [],
    mainVideoList: [],
    mainVideoListComment: [],
    defaultID: "",
    VideoPlayerOn: false,
  };

  componentDidMount() {
    const API_KEY = "cdbf441b-edda-4ae3-9dbc-993c52c69a5f";
    axios
      .get("https://project-2-api.herokuapp.com/videos?api_key=" + API_KEY)
      .then((response) => {
        const videoIDMain = response.data[0].id;
        this.setState({ sideVideoList: response.data });
        axios
          .get(
            "https://project-2-api.herokuapp.com/videos/" +
              videoIDMain +
              "?api_key=" +
              API_KEY
          )
          .then((response) => {
            this.setState({ mainVideoList: response.data });
            this.setState({ mainVideoListComment: response.data.comments });
            this.setState({ defaultID: response.data.id });
          });
      });
  }

  componentDidUpdate(prevprops, prevState) {
    const API_KEY = "cdbf441b-edda-4ae3-9dbc-993c52c69a5f";

    if (
      prevprops.match !== this.props.match &&
      this.props.match.params.videoid !== undefined
    ) {
      axios
        .get(
          "https://project-2-api.herokuapp.com/videos/" +
            this.props.match.params.videoid +
            "?api_key=" +
            API_KEY
        )
        .then((response) => {
          axios
            .get(
              "https://project-2-api.herokuapp.com/videos?api_key=" + API_KEY
            )
            .then((response) => {
              const filteredArrayList = response.data.filter((video) => {
                return video.id !== this.props.match.params.videoid;
              });

              filteredArrayList.unshift(response.data[0]);
              this.setState({ sideVideoList: filteredArrayList });
            });
          this.setState({ mainVideoList: response.data });
          this.setState({
            mainVideoListComment: response.data.comments,
          });
          this.setState({ defaultID: this.props.match.params.videoid });
          this.setState({ VideoPlayerOn: true });
        });
    }
  }

  render() {
    const commentAdderList = this.state.mainVideoListComment.map((comments) => {
      return (
        <CommentDetails
          key={comments.id}
          name={comments.name}
          comment={comments.comment}
          timestamp={dateFormatter(comments.timestamp)}
        />
      );
    });

    const videoAdderList = this.state.sideVideoList.map((comments, index) => {
      if (index > 0) {
        return (
          <VideoList
            key={comments.id}
            image={comments.image}
            title={comments.title}
            channel={comments.channel}
            clickedVideoObject={comments}
          />
        );
      } else {
        return;
      }
    });

    return (
      <>
        <HeroVideo mainVideo={this.state.mainVideoList.image} />
        <div className="desktop-main">
          <div className="desktop-main__desktop-sub-container">
            <VideoDetails
              details={this.state.mainVideoList}
              key={this.state.mainVideoList.id}
              date={dateFormatter(this.state.mainVideoList.timestamp)}
            />
            <Comments count={commentCounter(this.state.mainVideoListComment)} />

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
