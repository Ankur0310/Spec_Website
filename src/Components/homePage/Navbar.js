import React from "react";
import "./Navbar.css";
import img from "../../img/ism.png";
function Navbar() {
  return (
    <div>
      <div className="sidebar">
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>
      <div className="hamburger">
        <div className="ham-links">
          <a href="#">ABOUT US</a>
          <a href="#">SPONSORS</a>
          <a href="#">REGISTER</a>
          <a href="#">CONTACTS</a>
        </div>
      </div>
      <div className="nav-bar">
        <div className="links">
          <span>
            <a href="/events">Events</a>
          </span>
        </div>
        <div className="links">
          <span>
            <a href="/sports">Sports</a>
          </span>
        </div>
        <div className="links">
          <span>
            <a href="/">
              <img src={img} className="ism_logo_img" />
            </a>
          </span>
        </div>
        <div className="links">
          <span>
            <a href="/team">Team</a>
          </span>
        </div>
        <div className="links">
          <span>
            <a href="/about">About Us</a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
{
  /* <div>
      <nav className="navbar  navbar-expand-lg navbar-dark fixed-top bg-dark">
        <div className="container-fluid">
        <span className="navbar-brand">
          <img src="#" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
          SPEC 
        </span>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About us</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Sports</a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Basket Ball</a></li>
                <li><a className="dropdown-item" href="#">Cricket</a></li>
                <li><a className="dropdown-item" href="#">Hockey</a></li>
                <li><a className="dropdown-item" href="#">Swimming</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Events</a> 
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">General Championship</a></li>
                <li><a className="dropdown-item" href="#">Aramabh</a></li>
                <li><a className="dropdown-item" href="#">Other events</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">Teams</a>
            </li>
          </div>
          
        </div>
      </div>
    </nav>
  </div> */
}

{
  /* <div className="icon">
          <div className="logo"></div> */
}
