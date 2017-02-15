import React, { Component } from "react";
import Helmet from "react-helmet";

import Header from "./header";
import Hero from "./hero";
import TitleList from "./title-list";
import { titleLists } from "../data";

import { apiKey } from "../config";


export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.search = this.search.bind(this);
    this.state = { data: [] };
  }

  search (ev) {
    ev.preventDefault();

    const value = ev.target.value;

    fetch(`https://api.themoviedb.org/3/search/multi?query=${value}&api_key=${apiKey}`)
      .then(data => this.setState({ data }));
  }

  render() {
    return (
      <div className="home">
        <Helmet
          title="FakeFlix"
          meta={[
            {"name": "description", "content": "FakeFlix"}
          ]}
        />
        <div>
          <Header onSubmit={this.performSearch} />
          <Hero />
          {
            titleLists.map(titleList =>
              <TitleList titleList={titleList} />
            )
          }
        </div>
      </div>
    )
  }
}
