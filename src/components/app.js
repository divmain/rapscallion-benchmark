import React, { Component } from "react";
import { Route, StaticRouter } from "react-router-dom";
import Landing from "./landing";


export default class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={Landing} />
      </div>
    )
  }
}
