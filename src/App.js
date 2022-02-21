import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import UploadPage from "./components/UploadPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import MainSection from "./components/VideoPage";
import VideoPage from "./components/VideoPage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/Home" component={HomePage} />
          <Route
            path="/VideoPlayerPage/:videoid"
            render={(RouterProps) => {
              return <VideoPage match={RouterProps.match} {...RouterProps} />;
            }}
          />

          <Route path="/Upload" component={UploadPage} />
        </Switch>
      </Router>
    );
  }
}
