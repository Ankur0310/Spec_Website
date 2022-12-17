import React from "react";
import "../../styles/EventsPage_CSS/Events_herosection.css";
import AarambhImg from "../../assets/Aarambh.jpg";
function Events_herosection() {
  return (
    <div className="events_herosection">
      <img src={AarambhImg} className="events_herosection_img" alt="" />
      <h2>AARAMBH</h2>
    </div>
  );
}
export default Events_herosection;
