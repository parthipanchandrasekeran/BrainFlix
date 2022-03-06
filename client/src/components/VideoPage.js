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
import CommentDetails from "./Comments/commentDetails";
import VideoList from "./VideoList/VideoList";
import VideoListHeader from "./VideoList/VideoListHeader";
import axios from "axios";
import getcallfunction from "./getcallfunc";
import uuid from "react-native-uuid";

const API_KEY = "39558d9d-6a0f-4a5d-8b8c-84eea03ecabf";

export default class VideoPage extends Component {
  state = {
    sideVideoList: [],
    mainVideoList: [],
    mainVideoListComment: [],
    defaultID: "",
    firstVideoid: "",
    tempComments: "",
  };

  componentDidMount() {
    axios.get("http://localhost:4000/videos/").then((response) => {
      const videoIDMain = response.data[0].id;
      this.setState({ sideVideoList: response.data });
      axios
        .get("http://localhost:4000/videos/" + videoIDMain)
        .then((response) => {
          this.setState({ mainVideoList: response.data });
          this.setState({ mainVideoListComment: response.data.comments });
          this.setState({ defaultID: response.data.id });
        });
    });

    getcallfunction();
  }

  componentDidUpdate(prevprops) {
    if (
      prevprops.match.params.videoid !== this.props.match.params.videoid &&
      this.props.match.params.videoid !== undefined &&
      this.props.match.path !== "/Home"
    ) {
      axios
        .get("http://localhost:4000/videos/" + this.props.match.params.videoid)
        .then((response) => {
          axios
            .get("http://localhost:4000/videos/")
            .then((response) => {
              const filteredArrayList = response.data.filter((video) => {
                return video.id !== this.props.match.params.videoid;
              });

              filteredArrayList.unshift(response.data[0]);
              this.setState({ sideVideoList: filteredArrayList });
            })
            .catch((error) => {
              console.log(error);
            });
          this.setState({ mainVideoList: response.data });
          this.setState({
            mainVideoListComment: response.data.comments,
          });
          this.setState({ defaultID: this.props.match.params.videoid });
          this.setState({ firstVideoid: "" });
        });
    } else if (
      this.props.match.path === "/Home" &&
      this.state.firstVideoid === ""
    ) {
      axios.get("http://localhost:4000/videos/").then((response) => {
        const videoIDMain = response.data[0].id;
        this.setState({ sideVideoList: response.data });
        axios
          .get("http://localhost:4000/videos/" + videoIDMain)
          .then((response) => {
            this.setState({ mainVideoList: response.data });
            this.setState({
              mainVideoListComment: response.data.comments,
            });
            this.setState({ defaultID: response.data.id });
            this.setState({ firstVideoid: videoIDMain });
          })
          .catch((error) => {
            console.log(error);
          });
      });
    }
  }

  updateMainComment() {
    axios
      .get("http://localhost:4000/videos/" + this.state.defaultID)
      .then((response) => {
        this.setState({
          mainVideoListComment: response.data.comments,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  postComment() {
    axios
      .post(
        `https://project-2-api.herokuapp.com/videos/${this.state.defaultID}/comments?api_key=${API_KEY}`,
        { name: "BrainStation", comment: this.state.tempComments }
      )
      .then((response) => {
        this.updateMainComment();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteComment = (commentid) => {
    axios
      .delete(
        `https://project-2-api.herokuapp.com/videos/${this.state.defaultID}/comments/${commentid}?api_key=${API_KEY}`
      )
      .then((response) => {
        console.log(response);
        this.updateMainComment();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.postComment();
    this.setState({ tempComments: "" });
  };

  handleComment = (event) => {
    this.setState({ tempComments: event.target.value });
  };

  render() {
    const commentAdderList = this.state.mainVideoListComment.map(
      (comments, index) => {
        return (
          <CommentDetails
            key={uuid.v4()}
            name={comments.name}
            comment={comments.comment}
            timestamp={dateFormatter(comments.timestamp)}
            commentID={comments.id}
            deleteComment={this.deleteComment}
          />
        );
      }
    );

    const videoAdderList = this.state.sideVideoList.map((comments, index) => {
      if (index > 0) {
        return (
          <VideoList
            key={uuid.v4()}
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
              key={uuid.v4()}
              date={dateFormatter(this.state.mainVideoList.timestamp)}
            />
            <Comments
              handleSubmit={this.handleSubmit}
              count={commentCounter(this.state.mainVideoListComment)}
              handleComment={this.handleComment}
              value={this.state.tempComments}
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
