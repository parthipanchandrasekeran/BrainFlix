import { Component } from "react";
import UploadVideoImage from "../assets/Images/Upload-video-preview.jpg";
import "../styles/UploadPage.scss";

export default class UploadPage extends Component {
  render() {
    return (
      <>
        <h1 className="upload-page-header">Upload Video</h1>
        <section className="upload-page__hero-section">
          <p className="upload-page__hero-section-title">VIDEO THUMBNAIL</p>
          <div className="upload-page__hero-section-image-container">
            <img
              className="upload-page__hero-section-image"
              src={UploadVideoImage}
              alt="upload-hero-image"
            />
          </div>
        </section>
      </>
    );
  }
}
