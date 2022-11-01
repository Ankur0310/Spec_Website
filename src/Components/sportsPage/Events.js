import React from "react";
import CarouselEvents from "./CarouselEvents";
import "./Events.css";

const Events = () => {
  return (
    <div>
      <div className="events_main text-center">
        <h1 className="events_heading">Events</h1>
        <CarouselEvents />
        <br />
      </div>
      <hr />
    </div>
  );
};

export default Events;
