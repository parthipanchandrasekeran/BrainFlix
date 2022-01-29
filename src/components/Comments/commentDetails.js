import React from "react";

export default function CommentDetails() {
  return (
    <div className="comments-details-container">
      <div className="comments-details-container__image"></div>
      <div className="comments-details-container__right-main">
        <div className="comments-details-container__header-container">
          <p className="comments-details-container__name"></p>
          <p className="comments-details-container__date"></p>
        </div>
        <p className="comments-details-container__comments-details"></p>
      </div>
    </div>
  );
}
