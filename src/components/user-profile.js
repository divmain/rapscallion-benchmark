import React, { Component } from "react";


export default class extends Component {
  render () {
    return (
      <div className="UserProfile">
        <div className="User">
          <div className="name">Anthony Hopkins</div>
          <div className="image"><img src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTg5ODk1NTc5Ml5BMl5BanBnXkFtZTYwMjAwOTI4._V1_UY317_CR6,0,214,317_AL_.jpg" /></div>
        </div>
        <div className="UserProfile-menu">
          <div className="UserProfileSwitch">
            <ul>
              <li>
                <div className="UserProfile-image">
                  <img src="http://lorempixel.com/96/96" />
                </div>
                <div className="UserProfile-name">
                  Alexander
                </div>
              </li>
              <li>
                <div className="UserProfile-image">
                  <img src="http://lorempixel.com/96/96" />
                </div>
                <div className="UserProfile-name">
                  Mattias
                </div>
              </li>
            </ul>
          </div>
          <div className="UserNavigation">
            <ul>
              <li>Your Account</li>
              <li>Help Center</li>
              <li>Sign out of Netflix</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
