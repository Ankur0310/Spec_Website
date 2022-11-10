import React from "react";
import "../homePage/Homeherosection.css";
var current_page = 1;
var last_page = 4;
var step = 0, x = 0;
var play = false;
const wraper = document.getElementsByClassName('superScroll');

var SupScroll =(e)=>{
  
  if(e.deltaY < 0 && !play){
    play = true;
    current_page--;
    step-=100;
    console.log(e.deltaY,step);
  }
  else if(e.deltaY>0 && !play){
    play = true;
    current_page++;
    step+=100;
    wraper.style.transform = `translateY(${step}vh)`;
    console.log(e.deltaY,step);
  }
}

function Homeherosection() {
  return (
    <div onWheel={(e)=>{SupScroll(e)}} className="superScroll">
      <div className="parallax-1">
        <div className="bosm-heading"></div>
          <div className="ph1"></div>
          <div className="ph2"></div>
          {/* <div className="orient"></div>
          <div className="black"></div> */}
        <div className="wrapper">
          <div className="box">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homeherosection;
