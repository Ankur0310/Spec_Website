import React from "react";
import "../../styles/layout/Navbar.css";

function Navbar() {
  return (
    <>
      <div className="main-Navbar">
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
              <u>Home</u>
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
    </>
  );
}

export default Navbar;
