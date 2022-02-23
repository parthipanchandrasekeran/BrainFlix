import "./App.css";

import Header from "./components/Header";
import UploadPage from "./components/UploadPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import VideoPage from "./components/VideoPage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={VideoPage} />

          <Route
            path="/VideoPlayerPage/:videoid"
            render={(RouterProps) => {
              return <VideoPage match={RouterProps.match} {...RouterProps} />;
            }}
          />
          <Route
            exact
            path="/Home"
            render={(RouterProps) => {
              return <VideoPage match={RouterProps.match} {...RouterProps} />;
            }}
          />

          <Route
            path="/Upload"
            render={(RouterProps) => {
              return <UploadPage match={RouterProps.match} {...RouterProps} />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}
