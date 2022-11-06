import React from "react";
import "../homePage/Live_events.css";
import "../homePage/live_events_carausel.js";
import img1 from "../../img/e1.jpg";
import img2 from "../../img/e2.jpg";
import img3 from "../../img/e3.jpg";
import pr from "../../img/prev.png";
import nx from "../../img/next.png";

function Live_events() {
  return (
    <div className="live_events">
      <br />
      <h1 className="text-center nine">LIVE EVENTS</h1>
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
          <span className="prev" id="prev">
            {" "}
            <img src={pr} alt="" />{" "}
          </span>
          <span className="next" id="next">
            {" "}
            <img src={nx} alt="" />{" "}
          </span>
        </div>
      </div>
      <script></script>
    </div>
  );
}

export default Live_events;
