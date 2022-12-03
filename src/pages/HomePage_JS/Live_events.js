import React from "react";
import "../../styles/HomePage_CSS/Live_events.css";
import "../HomePage_JS/Live_events_carausel.js";
import img1 from "../../assets/e1.jpg";
import img2 from "../../assets/e2.jpg";
import img3 from "../../assets/e3.jpg";

function Live_events() {
  return (
    <div className="live_events">
      <br />
      <div>
        <h1 className="text-center nine">LIVE EVENTS</h1>
      </div>
      <div className="container">
        <div className="carouselContainer">
          <div className="carouselImgs slide">
            <img src={img1} alt="" />
            <br />
            <h3>Live event 1</h3>
          </div>

          <div className="carouselImgs slide">
            <img src={img2} alt="" />
            <br />
            <h3>Live event 2</h3>
          </div>
          <div className="carouselImgs slide">
            <img src={img3} alt="" />
            <br />
            <h3>Live event 3</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Live_events;
