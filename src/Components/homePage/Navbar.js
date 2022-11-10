import React from "react";
import "./Navbar.css";
import img from "../../img/ism.png";
function Navbar() {
  return (
    <div className="nav_main_c">
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
          {/* <span>
            <a href="/">
              <img src={img} className="ism_logo_img" />
            </a>
          </span> */}
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
