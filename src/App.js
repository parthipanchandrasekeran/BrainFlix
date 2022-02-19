import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import UploadPage from "./components/UploadPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";
import MainSection from "./components/MainSection";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            path="/VideoPlayerPage/:videoid"
            render={(RouterProps) => {
              return <MainSection match={RouterProps.match} {...RouterProps} />;
            }}
          />
          <Route exact path="/Home" component={HomePage} />

          <Route exact path="/Upload" component={UploadPage} />
        </Switch>
      </Router>
    );
  }
}
