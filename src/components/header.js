import React from "react";

import Logo from "./logo";
import Navigation from "./navigation";
import Search from "./search";
import UserProfile from "./user-profile";


export default props => (
  <header className="Header">
    <Logo />
    <Navigation />
    <Search onSearch={props.onSearch} />
    <UserProfile />
  </header>
);
