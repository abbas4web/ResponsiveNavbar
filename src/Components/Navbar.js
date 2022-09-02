import React, { useState } from "react";
import "./Navbar.css";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
} from "react-icons/fa";

import { FaAlignJustify } from "react-icons/fa";

const Navbar = () => {
  //
  const [showMediaIcons, setMediaIcons] = useState(false);

  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <h2>
            <span>S</span>haikh <span>A</span>bbas
          </h2>
        </div>

        <div
          className={
            showMediaIcons ?  " menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a href="">
                <FaFacebookSquare className="facebook" />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagramSquare className="instagram" />
              </a>
            </li>
            <li>
              <a href="">
                <FaGithubSquare className="youtube" />
              </a>
            </li>
          </ul>

          <div className="hamburger-menu">
            <a href="#" onClick={() => setMediaIcons(!showMediaIcons)}>
              <FaAlignJustify />
            </a>
          </div>
        </div>
      </nav>

      <div className="hero-section">
        <p>Welcome To Our Website</p>
        <h1> Shaikh Abbas </h1>
      </div>
    </>
  );
};

export default Navbar;
