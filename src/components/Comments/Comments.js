import React from "react";
import headerIcon from "../../assets/Images/Mohan-muruge.jpg";

function Comments(props) {
  return (
    <div className="comments-container">
      <p className="comments-container__comments-count">
        {props.count} Comments
      </p>
      <div className="insert-comment-container">
        <div className="insert-comment-container__main">
          <div className="insert-comment-container__image-container">
            <img
              src={headerIcon}
              alt="main-comment-image"
              className="insert-comment-container__side-image"
            />
          </div>
          <form
            id="insert-comment-container__form"
            className="insert-comment-container__form-class"
          >
            <div className="insert-comment-container__form-comment-container">
              <label
                className="insert-comment-container__form-comment-label"
                htmlFor="comment"
              >
                JOIN THE CONVERSATION
              </label>
              <textarea
                id="comment"
                className="insert-comment-container__form-comment-input"
                name="formcomment"
                placeholder="Add new comment"
              ></textarea>
              <div className="insert-comment-container__button-container">
                <button
                  className="insert-comment-container__form-button"
                  type="submit"
                >
                  COMMENT
                </button>
              </div>
            </div>
          </form>
          <div className="insert-comment-container__button-container--tablet">
            <button
              className="insert-comment-container__form-button--tablet"
              type="submit"
            >
              COMMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
