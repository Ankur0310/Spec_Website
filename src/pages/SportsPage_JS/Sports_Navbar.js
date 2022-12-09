import React from "react";
import "../../styles/SportsPage_CSS/Sports_Navbar.css";
function Sports_Navbar() {
  return (
    <div className="nav_main_c">
      <div className="s_nav-bar">
        <div className="links">
          <span>
            <a href="/sports/facilities">Facilities</a>
          </span>
        </div>
        <div className="links">
          <span>
            <a href="/sports/coaches">Coaches</a>
          </span>
        </div>
        <div className="links">
          <span>
            <a href="/sports/rules">Rules</a>
          </span>
        </div>
        <div className="links">
          <span>
            <a href="/sports/hall_of_fame">Hall of Fame</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sports_Navbar;
