import React, { Component } from "react";
import logo from "../assets/Logo/BrainFlix-logo.svg";
import headerIcon from "../assets/Images/Mohan-muruge.jpg";
import "../styles/header.scss";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo-container">
          <a href="">
            <img className="header__logo" src={logo} alt="logo" />
          </a>
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

        <div className="header__upload-container">
          <button className="header__upload-button">Upload</button>
        </div>
      </div>
    );
  }
}
