import React from "react";
import "../../styles/SportsPage_CSS/Sports_herosection.css";
import BasketballImg from "../../assets/Basketball3.jpg";
function Sports_herosection() {
  return (
    <>
      <div className="sports_herosection">
        <img src={BasketballImg} className="sports_herosection_img" alt="" />
        <h2>BASKETBALL</h2>
      </div>
    </>
  );
}

export default Sports_herosection;
