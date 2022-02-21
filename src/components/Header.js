import React, { Component } from "react";
import logo from "../assets/Logo/BrainFlix-logo.svg";
import headerIcon from "../assets/Images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";
import "../styles/header.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo-container">
          <Link to="/Home">
            <img className="header__logo" src={logo} alt="logo" />
          </Link>
        </div>

        <div className="header__right-main-container--tablet">
          <div className="header__search-box-container--tablet">
            <input
              className="header__search-box--tablet"
              type="text"
              placeholder="Search"
            />
          </div>

          <Link to="/Upload" className="header__upload-container--tablet">
            <button className="header__upload-button--tablet">Upload</button>
          </Link>
          <div className="header__icon-container--tablet">
            <img
              className="header__icon--tablet"
              src={headerIcon}
              alt="headerIcon"
            />
          </div>
        </div>

        <div className="header__search-container">
          <div className="header__search-box-container">
            <input
              className="header__search-box"
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="header__icon-container">
            <img className="header__icon" src={headerIcon} alt="headerIcon" />
          </div>
        </div>

        <Link to="/Upload" className="header__upload-container">
          <button className="header__upload-button">Upload</button>
        </Link>
      </div>
    );
  }
}
