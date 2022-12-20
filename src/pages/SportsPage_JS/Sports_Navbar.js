import React from "react";
import "../../styles/SportsPage_CSS/Sports_Navbar.css";
function Sports_Navbar() {
  return (
    <div className="nav_main_c">
      <div className="s_nav-bar">
        <div className="links_s">
          <span>
            <a href="/">SPORTS</a>
          </span>
        </div>
        <div className="links_s">
          <span>
            <a href="/sports/facilities">FACILITIES</a>
          </span>
        </div>
        <div className="links_s">
          <span>
            <a href="/sports/coaches">COACHES</a>
          </span>
        </div>
        <div className="links_s">
          <span>
            <a href="/sports/rules">RULES</a>
          </span>
        </div>
        <div className="links_s">
          <span>
            <a href="/sports/hall_of_fame">HALL OF FAME</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sports_Navbar;
