import React from "react";
import "../../styles/EventsPage_CSS/EventsBg.css";
import Navbar from "../HomePage_JS/Navbar";
import AboutChampionship from "./AboutChampionship";
import Events_herosection from "./Events_herosection";
import Events_Navbar from "./Events_Navbar";
import Footer from "../Footer";

function EventsBg() {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Events_Navbar />
        <Events_herosection />
        <AboutChampionship />
      </div>
      <Footer />
    </>
  );
}

export default EventsBg;
