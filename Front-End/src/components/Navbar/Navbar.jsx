import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import images from "../../constants/images";
import "./Navbar.css";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app-navbar">
      <div className="app-navbar-logo">
        <img src={images.logo} alt="app logo" />
      </div>
      <ul className="app-navbar-links">
        <li className="p-opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p-opensans">
          <a href="#about">About</a>
        </li>
        <li className="p-opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app-navbar-login">
        <a href="#login" className="p-opensans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p-opensans">
          Admin-Login
        </a>
      </div>
      <div className="app-navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app-navbar-smallscreen-overlay flex-center slide-bottom">
            <MdOutlineClose
              fontSize={27}
              className="overlay-close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app-navbar-smallscreen-links">
              <li className="p-opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p-opensans">
                <a href="#about">About</a>
              </li>
        
              <li className="p-opensans">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};


