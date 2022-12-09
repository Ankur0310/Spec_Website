// import React from "react";
// import CarouselEvents from "./CarouselEvents";
// import "./Events.css";

// const Events = () => {
//   return (
//     <div>
//       <div className="events_main text-center">
//         <h1 className="events_heading">Events</h1>
//         <CarouselEvents />
//         {/* <br /> */}
//       </div>
//       {/* <hr /> */}
//     </div>
//   );
// };

// export default Events;
import React from "react";

import "../../styles/SportsPage_CSS/Sports_Events.css";
import img1 from "../../assets/e1.jpg";
import img2 from "../../assets/e2.jpg";
import img3 from "../../assets/e3.jpg";

function Live_events() {
  return (
    <div className="live_events">
      <br />
      <div>
        <h1 className="text-center nine">EVENTS</h1>
      </div>
      <div className="container">
        <div className="carouselContainer">
          <div className="carouselImgs slide">
            <img src={img1} alt="" />
            <br />
            <h3>Event 1</h3>
          </div>

          <div className="carouselImgs slide">
            <img src={img2} alt="" />
            <br />
            <h3>Event 2</h3>
          </div>
          <div className="carouselImgs slide">
            <img src={img3} alt="" />
            <br />
            <h3>Event 3</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Live_events;
