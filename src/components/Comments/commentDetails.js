import React from "react";

export default function CommentDetails({ name, comment, timestamp }) {
  return (
    <div className="comments-details-container">
      <div className="comments-details-container__image"></div>
      <div className="comments-details-container__right-main">
        <div className="comments-details-container__header-container">
          <p className="comments-details-container__name">{name}</p>
          <p className="comments-details-container__date">{timestamp}</p>
        </div>
        <p className="comments-details-container__comments-details">
          {comment}
        </p>
      </div>
    </div>
  );
}
