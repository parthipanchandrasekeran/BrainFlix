import React, { Component } from "react";
import axios from "axios";
import uuid from "react-native-uuid";
const STATIC_IMAGE_URL = "http://localhost:4000/static";
const TIME = Date.now();

export class UploadForm extends Component {
  state = {
    title: "",
    description: "",
  };

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.title && this.state.description !== "") {
      const tempUUID = uuid.v4();
      axios
        .post("http://localhost:4000/upload/" + tempUUID, {
          title: this.state.title,
          channel: "Test Channel",
          image: STATIC_IMAGE_URL,
          description: this.state.description,
          views: 100,
          likes: 200,
          duration: 5,
          video: STATIC_IMAGE_URL,
          timestamp: TIME,
          comments: [
            {
              name: "Micheal Lyons",
              comment:
                "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
              likes: 0,
              timestamp: TIME,
            },
            {
              name: "Gary Wong",
              comment:
                "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
              likes: 0,
              timestamp: TIME,
            },
            {
              name: "Theodore Duncan",
              comment:
                "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!",
              likes: 0,
              timestamp: TIME,
            },
          ],
          id: tempUUID,
        })

        .then((response) => {
          alert("Video Submitted Successfully!!lets go to Home Page Now");
          this.props.match.history.push("/Home");
        });
    } else {
      alert("Please Enter Title/Description to proceed");
    }
  }

  render() {
    return (
      <form
        onSubmit={(event) => {
          this.handleSubmit(event);
        }}
        className="upload-form"
      >
        <p className="upload-form__label-title">TITLE YOUR VIDEO</p>
        <div className="upload-form__input-title-container">
          <input
            onChange={(event) => {
              this.onChange(event);
            }}
            className="upload-form__input-title"
            name="title"
            placeholder="Add a title to your video"
          />
        </div>
        <p className="upload-form__label-description">
          ADD A VIDEO DESCRIPTION
        </p>
        <div className="upload-form__input-description-container">
          <input
            onChange={(event) => {
              this.onChange(event);
            }}
            name="description"
            className="upload-form__input-description"
            placeholder="Add a description to your video"
          />
        </div>
        <div className="upload-form__button-container-main">
          <button type="submit" className="upload-form__publish-button">
            PUBLISH
          </button>
          <button className="upload-form__cancel-button">CANCEL</button>
        </div>
        <div className="upload-form__button-container-main--tablet">
          <button className="upload-form__cancel-button">CANCEL</button>
          <button type="submit" className="upload-form__publish-button">
            PUBLISH
          </button>
        </div>
      </form>
    );
  }
}

export default UploadForm;
