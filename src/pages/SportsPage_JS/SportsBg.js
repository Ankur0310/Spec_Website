import React from "react";
import Navbar from "../HomePage_JS/Navbar";
import Sports_Navbar from "./Sports_Navbar";
import "../../styles/SportsPage_CSS/SportsBg.css";
function SportsBg() {
  return (
    <div>
      <div className="wrapper">
        <Sports_Navbar />
      </div>
    </div>
  );
}

export default SportsBg;
