import React from "react";
import "../../styles/AboutUs_CSS/AboutUs_herosection.css";
import AboutUsImg from "../../assets/AboutUs.jpg";
function AboutUs_herosection() {
  return (
    <>
      <div className="aboutUs_herosection">
        <img src={AboutUsImg} className="aboutUs_herosection_img" alt="" />
      </div>
    </>
  );
}
export default AboutUs_herosection;
