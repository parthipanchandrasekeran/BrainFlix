import React from "react";
import headerIcon from "../../assets/Images/Mohan-muruge.jpg";

function Comments({ count, handleSubmit, handleComment, value }) {
  return (
    <div className="comments-container">
      <p className="comments-container__comments-count">{count} Comments</p>
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
            onSubmit={(event) => {
              handleSubmit(event);
            }}
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
              <div className="insert-comment-container__form-comment-container-main">
                <input
                  onChange={(event) => {
                    handleComment(event);
                  }}
                  value={value}
                  id="comment"
                  className="insert-comment-container__form-comment-input"
                  name="formcomment"
                  placeholder="Add new comment"
                />
                <div className="insert-comment-container__button-container">
                  <button
                    type="submit"
                    className="insert-comment-container__form-button"
                  >
                    COMMENT
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Comments;
