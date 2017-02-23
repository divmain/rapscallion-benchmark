import React from "react";

import Logo from "./logo";
import Navigation from "./navigation";
import Search from "./search";
import UserProfile from "./user-profile";

let searchCacheKey;
let logoCacheKey;
let navCacheKey;
if (process.env.HANDLER === "cached") {
  searchCacheKey = "Search::";
  logoCacheKey = "Logo::";
  navCacheKey = "Navigation::"
}

export default props => (
  <header className="Header">
    <Logo cacheKey={logoCacheKey} />
    <Navigation cacheKey={navCacheKey} />
    <Search onSearch={props.onSearch} cacheKey={searchCacheKey} />
    <UserProfile />
  </header>
);
