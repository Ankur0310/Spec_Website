import React from "react";
import "../../styles/HomePage_CSS/Home_SportsSection.css";
import img1 from "../../assets/s1.jpg";
import img2 from "../../assets/s2.jpg";
import img3 from "../../assets/s3.jpg";
import img4 from "../../assets/s4.jpg";
import img5 from "../../assets/s5.jpg";
import img6 from "../../assets/s6.jpg";

function Sports() {
  return (
    <div className="main_div_sports">
      <h1 className="text-center">SPORTS</h1>
      <div class="cards-list">
        <div class="card 1">
          <div class="card_image">
            {" "}
            <img src={img1} alt="" />{" "}
          </div>
          <div class="card_title title-white">
            <p>Basketball</p>
          </div>
        </div>

        <div class="card 2">
          <div class="card_image">
            <img src={img2} alt="" />
          </div>
          <div class="card_title title-white">
            <p>Volley Ball</p>
          </div>
        </div>

        <div class="card 3">
          <div class="card_image">
            <img src={img3} alt="" />
          </div>
          <div class="card_title title-white">
            <p>Cricket</p>
          </div>
        </div>

        <div class="card 4">
          <div class="card_image">
            <img src={img4} alt="" />
          </div>
          <div class="card_title title-white">
            <p>Hockey</p>
          </div>
        </div>

        <div class="card 5">
          <div class="card_image">
            <img src={img5} alt="" />
          </div>
          <div class="card_title title-white">
            <p>Badminton</p>
          </div>
        </div>

        <div class="card 6">
          <div class="card_image">
            <img src={img6} alt="" />
          </div>
          <div class="card_title title-white">
            <p>Tennis</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sports;
