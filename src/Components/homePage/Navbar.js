import React from "react";
import "./Navbar.css";
import img from "../../img/ism.png";
function Navbar() {
  return (
    <div>
      <div className="sidebar">
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>
      <div className="hamburger">
        <div className="ham-links">
          <a href="#">ABOUT US</a>
          <a href="#">SPONSORS</a>
          <a href="#">REGISTER</a>
          <a href="#">CONTACTS</a>
        </div>
      </div>
      <div className="nav-bar">
        <div className="links">
          <span>
            <a href="/events">Events</a>
          </span>
        </div>
        <div className="links">
          <span>
            <a href="/sports">Sports</a>
          </span>
        </div>
        <div className="links">
          <span>
            <a href="/">
              <img src={img} className="ism_logo_img" />
            </a>
          </span>
        </div>
        <div className="links">
          <span>
            <a href="/team">Team</a>
          </span>
        </div>
        <div className="links">
          <span>
            <a href="/about">About Us</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
