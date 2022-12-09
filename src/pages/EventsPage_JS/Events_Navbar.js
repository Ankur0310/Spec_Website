import React from "react";
import { Link } from "react-router-dom";
import "../../styles/EventsPage_CSS/Events_Navbar.css";

function Events_Navbar() {
  return (
    <div className="nav_main_c">
      <div className="e_nav-bar">
        <div className="links">
          <span>
            {/* <a href="/events/Aarambh"
            prop="GC" >General Championship</a> */}
            <Link to="/EventsS/General-Championship" prop="GC">
              General Championship
            </Link>
          </span>
        </div>
        <div className="links">
          <span>
            {/* <a href="/events/Aarambh"
            prop="AH">Aarambh</a> */}
            <Link to="/EventsS/Aarambh" prop="GC">
              Aarambh
            </Link>
          </span>
        </div>
        <div className="links">
          <span>
            {/* <a href="/events/Aarambh"
            prop="OE">Other Events</a> */}
            <Link to="/EventsS/Other-Events" prop="GC">
              Other Events
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Events_Navbar;
