import React from "react";
import "../Components/VerticalNavigator.css";
import $ from "jquery";
import Notice from "../Components/homePage/Notice";
import Navbar from "../Components/homePage/Navbar";
import Live_events from "../Components/homePage/Live_events";
import Sports from "../Components/homePage/Sports";
import Homeherosection from "../Components/homePage/Homeherosection";

$(document).ready(function () {
  $(window).on("scroll", function () {
    var link = $(".navbar a.dot");
    var top = $(window).scrollTop();

    $(".sec").each(function () {
      var id = $(this).attr("id");
      var height = $(this).height();
      var offset = $(this).offset().top - 150;
      if (top >= offset && top < offset + height) {
        link.removeClass("active");
        $(".navbar")
          .find('[data-scroll="' + id + '"]')
          .addClass("active");
      }
    });
  });
});
function VerticalNavigator() {
  return (
    <>
      <Navbar />
      <nav className="navbar">
        <ul>
          <li>
            <a href="#home" class="dot active" data-scroll="home">
              <span>Home</span>
            </a>
          </li>

          <li>
            <a href="#about" class="dot" data-scroll="about">
              <span>Notices</span>
            </a>
          </li>

          <li>
            <a href="#service" class="dot" data-scroll="service">
              <span>Live Events</span>
            </a>
          </li>

          <li>
            <a href="#project" class="dot" data-scroll="project">
              <span>Sports</span>
            </a>
          </li>

          <li>
            <a href="#contact" class="dot" data-scroll="contact">
              <span>Contact Us</span>
            </a>
          </li>
        </ul>
      </nav>

      <section class="sec" id="home">
        <Homeherosection />
      </section>
      <section class="sec" id="about">
        <Notice />
      </section>
      <section class="sec" id="service">
        <Live_events />
      </section>
      <section class="sec" id="project">
        <Sports />
      </section>
    </>
  );
}

export default VerticalNavigator;
