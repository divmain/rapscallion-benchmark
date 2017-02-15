import React, { Component } from "react";

import { apiKey } from "../config";


const Item = props => (
  <div className="Item" style={{ backgroundImage: `url(${props.backdrop})` }} >
    <div className="overlay">
      <div className="title">{props.title}</div>
      <div className="rating">{props.score} / 10</div>
      <div className="plot">{props.overview}</div>
      <ListToggle />
    </div>
  </div>
);


class ListToggle extends Component {
  constructor (...args) {
    super(...args);
    this.state = { toggled: false };
  }

  render () {
    const handleClick = () => this.setState({ toggled: !this.state.toggled });

    return (
      <div onClick={this.handleClick} data-toggled={this.state.toggled} className="ListToggle">
        <div>
          <i className="fa fa-fw fa-plus"></i>
          <i className="fa fa-fw fa-check"></i>
        </div>
      </div>
    );
  }
}

export default ({ titleList }) => {
  const { name, data } = titleList;

  const titles = data.map((title, idx) => {
    if (idx > 4) { return null; }

    const backDrop = `http://image.tmdb.org/t/p/original${title.backdrop_path}`;
    const name = title.name || title.original_title;

    return (
      <Item key={title.id} title={name} score={title.vote_average} overview={title.overview} backdrop={backDrop} />
    );  

  });
  
  return (
    <div ref="titlecategory" className="TitleList" data-loaded>
      <div className="Title">
        <h1>{name}</h1>
        <div className="titles-wrapper">
          {titles}
        </div>
      </div>
    </div>
  );
}
