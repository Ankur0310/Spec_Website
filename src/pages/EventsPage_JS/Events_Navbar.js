import React from "react";
import "../../styles/EventsPage_CSS/Events_Navbar.css";

function Events_Navbar() {
  return (
    <div className="nav_main_c">
      <div className="e_nav-bar">
        <div className="links">
          <span>
            <a href="/events/generalChampionship">General Championship</a>
          </span>
        </div>
        <div className="links">
          <span>
            <a href="/events/Aarambh">Aarambh</a>
          </span>
        </div>
        <div className="links">
          <span>
            <a href="/events/otherevents">Other Events</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Events_Navbar;
