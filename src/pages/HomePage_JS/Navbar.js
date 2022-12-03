import React from "react";
import "../../styles/HomePage_CSS/Navbar.css";

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
        <div className="links"></div>
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
