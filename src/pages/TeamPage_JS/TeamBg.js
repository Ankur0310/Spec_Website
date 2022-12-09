import React from "react";
import "../../styles/TeamPage_CSS/TeamBg.css";

import Admins from "./Admins";
import Trainers_Coaches from "./Trainers_Coaches";

function TeamBg() {
  return (
    <div>
      <div className="wrapper">
        <Admins />
        <Trainers_Coaches />
      </div>
    </div>
  );
}

export default TeamBg;
