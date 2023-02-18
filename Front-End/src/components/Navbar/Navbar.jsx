import React from "react";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
// import images from "../../constants/images";
// import "./Navbar.css";

import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate("/login");
  };
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app-navbar">
      <div className="app-navbar-logo">
        <img className="logo" src={logo} alt="Logo" />
      </div>
      <ul className="app-navbar-links">
        <li className="list">
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
      <button className="navBtn" onClick={handleSearch}>
            Login/Register
          </button>
        <div />
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

// import "./Navbar.css"
// import logo from "../../assets/logo.png";
// import { useNavigate } from "react-router-dom";

// export const Navbar = () => {
//   const navigate = useNavigate();
//   const handleSearch = () => {
//     navigate("/login");
//   };

//   return (
//     <div className="navbar">
//         <div className="navContaniner">
//             <img className="logo" src={logo} alt="Logo" />
//             <div className="navIteam">
//             <button className="navBtn" onClick={handleSearch}>
//                   Login/Register
//                 </button>
//             </div>
//         </div>
//     </div>
//   )
// }
