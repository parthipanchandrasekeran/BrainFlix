import { Component } from "react";
import UploadVideoImage from "../assets/Images/Upload-video-preview.jpg";
import UploadForm from "./UploadPage/UploadForm";
import "../styles/UploadPage.scss";

export default class UploadPage extends Component {
  render() {
    return (
      <>
        <h1 className="upload-page-header">Upload Video</h1>
        <div className="upload-page-header__desktop-main">
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
          <div className="upload-page__desktop-main">
            <UploadForm match={this.props} />
          </div>
        </div>
        <div className="upload-page__mobile-main">
          <UploadForm match={this.props} />
        </div>
      </>
    );
  }
}
