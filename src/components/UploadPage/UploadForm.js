import React, { Component } from "react";

export class UploadForm extends Component {
  render() {
    return (
      <form className="upload-form">
        <p className="upload-form__label-title">TITLE YOUR VIDEO</p>
        <div className="upload-form__input-title-container">
          <input
            className="upload-form__input-title"
            placeholder="Add a title to your video"
          ></input>
        </div>
        <p className="upload-form__label-description">
          ADD A VIDEO DESCRIPTION
        </p>
        <div className="upload-form__input-description-container">
          <input
            className="upload-form__input-description"
            placeholder="Add a description to your video"
          ></input>
        </div>
        <div className="upload-form__button-container-main">
          <button className="upload-form__publish-button">PUBLISH</button>
          <button className="upload-form__cancel-button">CANCEL</button>
        </div>
      </form>
    );
  }
}

export default UploadForm;
