import React from "react";
import "../homePage/Live_events.css";
import "../homePage/live_events_carausel.js"

function Live_events() {
  return (
    <div>
          <h1 className="text-center">LIVE EVENTS</h1>          
          <div className="container">
          <div className="carouselContainer">
            <div className="carouselImgs slide1">
              <h1>Slide1</h1>
            </div>
            <div className="carouselImgs slide2">
              <h1>Slide2</h1>
            </div>
            <div className="carouselImgs slide3">
              <h1>Slide3</h1>
            </div>
            <div className="carouselImgs slide4">
              <h1>Slide4</h1>
            </div>
            <span className="prev" id="prev"> prev </span>
            <span className="next" id="next"> next </span>
          </div>
          </div>
          <script>
            
          </script>
    </div>
  );
}

export default Live_events;
