import React from "react";
import Navbar from "../Navbar";
import Sports_Navbar from "./Sports_Navbar";
import "../../styles/SportsPage_CSS/SportsBg.css";
import Sports_herosection from "./Sports_herosection.js";
import Sports_gallery from "./Sports_Gallery";
import Sports_Events from "./Sports_Events";
import Sports_Facilities from "./Sports_Facilites";
import Sports_Coaches from "./Sports_Coaches";
import Sports_Rules from "./Sports_Rules";
import Sports_HOF from "./Sports_HOF";
function SportsBg() {
  return (
    <div>
      <div className="wrapper">
        <Sports_Navbar />
        <Sports_herosection />
        <Sports_gallery />

        <Sports_Facilities />
        <Sports_Coaches />
        <Sports_Rules />
        <Sports_HOF />
      </div>
    </div>
  );
}

export default SportsBg;
