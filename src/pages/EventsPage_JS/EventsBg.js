import React from "react";
import "../../styles/EventsPage_CSS/EventsBg.css";

import Events_herosection from "./Events_herosection";
import Events_Navbar from "./Events_Navbar";
import Events_desc from "./Events_desc";
import Events_gallery from "./Events_gallery";

function EventsBg() {
  return (
    <>
      <div className="wrapper">
        {/* <Events_Navbar /> */}
        <Events_herosection />
        <Events_desc />
        <Events_gallery />
      </div>
    </>
  );
}

export default EventsBg;
