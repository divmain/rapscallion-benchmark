import React from "react";


const HeroButton = props => (
  <a href="#" className={`Button${ props.primary ? " primary" : ""}`}>
    {props.text}
  </a>
);

export default props => (
  <div id="hero" className="Hero" style={{ backgroundImage: 'url(https://images.alphacoders.com/633/633643.jpg)' }}>
    <div className="content">
      <img className="logo" src="http://www.returndates.com/backgrounds/narcos.logo.png" alt="" />
      <h2>Season 2 now available</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque id quam sapiente unde voluptatum alias vero debitis, magnam quis quod.</p>
      <div className="button-wrapper">
        <HeroButton primary text="Watch now" />
        <HeroButton text="+ My list" />
      </div>
    </div>
    <div className="overlay"></div>
  </div>
);
