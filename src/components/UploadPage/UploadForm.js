import React, { Component } from "react";

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
    console.log(this.state);
    alert("submitted successfully");
    this.props.match.history.push("/Home");
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
          ></input>
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
          ></input>
        </div>
        <div className="upload-form__button-container-main">
          <button type="submit" className="upload-form__publish-button">
            PUBLISH
          </button>
          <button className="upload-form__cancel-button">CANCEL</button>
        </div>
      </form>
    );
  }
}

export default UploadForm;
