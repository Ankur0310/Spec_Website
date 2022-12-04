import React from "react";
import { useRef } from "react";
import "../../styles/HomePage_CSS/Homeherosection.css";

function Homeherosection() {
  const piyush = useRef();
  var current_page = 1;
  var last_page = 4;
  var step = 0,
    x = 0;
  var play = false;
  // const wraper = document.getElementsByClassName("superScroll")[0];
  // console.log(piyush);
  // console.log(piyush);

  // wraper.addEventListener("wheel",SupScroll,false);

  var SupScroll = (e) => {
    if (e.deltaY < 0 && !play) {
      // play = true;
      current_page--;
      step -= 100;
      console.log(e.deltaY, step);
      e.preventDefault();
    } else if (e.deltaY > 0 && !play) {
      // play = true;
      current_page++;
      step += 100;
      // wraper.style.transform = `translateY(${step}vh)`;
      console.log(e.deltaY, step);
      e.preventDefault();
    }
  };

  return (
    <div className="superScroll" ref={piyush}>
      {console.log(piyush)}
      <div className="parallax-1">
        <div className="bosm-heading"></div>
        <div className="ph1"></div>
        <div className="ph2"></div>
        {/* <div className="orient"></div>
          <div className="black"></div> */}
        <div className="wrapper"></div>
      </div>
    </div>
  );
}

export default Homeherosection;
