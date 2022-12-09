import React from "react";
import "../../styles/EventsPage_CSS/Events_herosection.css";
import AarambhImg from "../../assets/lg.jpg";
function Events_herosection() {
  return (
    <div className="events_herosection">
      <img src={AarambhImg} className="events_herosection_img" alt="" />
      <h1>AARAMBH</h1>
    </div>
  );
}
export default Events_herosection;
