import React from "react";

export default props => (
  <form onSubmit={props.onSearch} id="search" className="Search">
    <input type="search" placeholder="Search for a title..." />
  </form>
);
