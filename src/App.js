import "./App.css";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/HomePage" component={HomePage} />
        </Switch>
      </Router>
    );
  }
}
