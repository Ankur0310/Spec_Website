import React from "react";
import "../styles/VerticalNavigator.css";
import $ from "jquery";
import Notice from "../pages/HomePage_JS/Notice";
import Navbar from "../pages/HomePage_JS/Navbar";
import Live_events from "../pages/HomePage_JS/Live_events";
import Home_SportsSection from "../pages/HomePage_JS/Home_SportsSection";
import Homeherosection from "../pages/HomePage_JS/Homeherosection";
import Footer from "./Footer";

// $(document).ready(function () {
//   $(window).on("scroll", function () {
//     var link = $(".navbar a.dot");
//     var top = $(window).scrollTop();

//     $(".sec").each(function () {
//       var id = $(this).attr("id");
//       var height = $(this).height();
//       var offset = $(this).offset().top - 150;
//       if (top >= offset && top < offset + height) {
//         link.removeClass("active");
//         $(".navbar")
//           .find('[data-scroll="' + id + '"]')
//           .addClass("active");
//       }
//     });
//   });
// });
function VerticalNavigator() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <a href="#home" className="dot active" data-scroll="home">
              <span>Home</span>
            </a>
          </li>

          <li>
            <a href="#about" className="dot" data-scroll="about">
              <span>Notices</span>
            </a>
          </li>

          <li>
            <a href="#service" className="dot" data-scroll="service">
              <span>Live Events</span>
            </a>
          </li>

          <li>
            <a href="#project" className="dot" data-scroll="project">
              <span>Sports</span>
            </a>
          </li>
        </ul>
      </nav>

      <section id="home">
        <Homeherosection />
      </section>
      <section id="about">
        <Notice />
      </section>
      <section id="service">
        <Live_events />
      </section>
      <section id="project">
        <Home_SportsSection />
      </section>
    </>
  );
}

export default VerticalNavigator;
