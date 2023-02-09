import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app-header app-wrapper section-padding" id="home">
    <div className="app-wrapper-info">
      <SubHeading title="Pedal to the freedom of mobility." />
      <h1 className="app-header-h1">The flexible, fun way to travel.</h1>
      <p className="p-opensans" style={{margin: '2rem 0'}}>In spring, summer or fall, biking is one of the best ways to explore Montréal – and it's easy to rent a bike in the city if you don't have your own. </p>
     
    </div>
    <div className="app-wrapper-img" >
       <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
