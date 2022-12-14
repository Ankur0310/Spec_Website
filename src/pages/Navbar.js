import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>SPEC</h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              {/* <NavLink to="/">Home</NavLink> */}
              <a href="/">HOME</a>
            </li>
            <li>
              {/* <NavLink to="/events">Events</NavLink> */}
              <a href="/events">EVENTS</a>
            </li>
            <li>
              {/* <NavLink to="/sports">Sports</NavLink> */}
              <a href="/sports">SPORTS</a>
            </li>
            <li>
              {/* <NavLink to="/team">Team</NavLink> */}
              <a href="/team">TEAM</a>
            </li>
            <li>
              {/* <NavLink to="/about">About</NavLink> */}
              <a href="/about">ABOUT US</a>
            </li>
          </ul>
        </div>

        <div className="social-media">
          {/* hamburget menu start  */}
          <button
            className="hamburger-menu"
            onClick={() => {
              setShowMediaIcons(!showMediaIcons);
              console.log("working");
            }}
          >
            <GiHamburgerMenu />
            {/* </a> */}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

// import React from "react";
// import "../styles/layout/Navbar.css";
// import navicon from "../assets/logo.svg";

// function Navbar() {
//   return (
//     <>
//       <div className="main-Navbar">
//         <div className="container navcont">
//           <div className="col-1.5">
//             <img src={navicon} alt="" srcset="" />
//           </div>
//           <div className="col-7 newcol">
//             <div className="links">
//               <span>
//                 <a href="/">HOME</a>
//               </span>
//             </div>
//             <div className="links">
//               <span>
//                 <a href="/events">EVENTS</a>
//               </span>
//             </div>
//             <div className="links">
//               <span>
//                 <a href="/sports">SPORTS</a>
//               </span>
//             </div>
//             <div className="links">
//               <span>
//                 <a href="/team">TEAM</a>
//               </span>
//             </div>
//             <div className="links">
//               <span>
//                 <a href="/about">ABOUT US</a>
//               </span>
//             </div>
//           </div>
//           <div className="col-2"></div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Navbar;

// import { useState, useEffect } from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// // import logo from "../assets/logo.svg";
// // import navIcon1 from "../assets/nav-icon1.svg";
// // import navIcon2 from "../assets/nav-icon2.svg";
// // import navIcon3 from "../assets/nav-icon3.svg";
// // import { HashLink } from "react-router-hash-link";
// import { BrowserRouter as Router } from "react-router-dom";

// function NavBar() {
//   const [activeLink, setActiveLink] = useState("home");
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   const onUpdateActiveLink = (value) => {
//     setActiveLink(value);
//   };

//   return (
//     <Router>
//       <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
//         <Container>
//           <Navbar.Brand href="/">
//             <img src={""} alt="logo" />
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav">
//             <span className="navbar-toggler-icon"></span>
//           </Navbar.Toggle>
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="ms-auto">
//               <Nav.Link
//                 href="#home"
//                 className={
//                   activeLink === "home" ? "active navbar-link" : "navbar-link"
//                 }
//                 onClick={() => onUpdateActiveLink("home")}
//               >
//                 Home
//               </Nav.Link>
//               <Nav.Link
//                 href="#skills"
//                 className={
//                   activeLink === "skills" ? "active navbar-link" : "navbar-link"
//                 }
//                 onClick={() => onUpdateActiveLink("skills")}
//               >
//                 Skills
//               </Nav.Link>
//               <Nav.Link
//                 href="#projects"
//                 className={
//                   activeLink === "projects"
//                     ? "active navbar-link"
//                     : "navbar-link"
//                 }
//                 onClick={() => onUpdateActiveLink("projects")}
//               >
//                 Projects
//               </Nav.Link>
//             </Nav>
//             <span className="navbar-text">
//               <div className="social-icon">
//                 <a href="#">
//                   <img src={""} alt="" />
//                 </a>
//                 <a href="#">
//                   <img src={""} alt="" />
//                 </a>
//                 <a href="#">
//                   <img src={""} alt="" />
//                 </a>
//               </div>
//               {/* <HashLink to="#connect"> */}
//               <button className="vvd">
//                 <span>Let???s Connect</span>
//               </button>
//               {/* </HashLink> */}
//             </span>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </Router>
//   );
// }

// export default NavBar;
