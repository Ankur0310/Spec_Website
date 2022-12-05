import React from "react";
import "../../styles/TeamPage_CSS/TeamBg.css";
import Navbar from "../HomePage_JS/Navbar";
import Admins from "./Admins";

function TeamBg() {
  return (
    <div>
      <div className="wrapper">
        <Navbar />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Admins />
      </div>
    </div>
  );
}

export default TeamBg;
