import React from 'react';
import {Helmet} from "react-helmet";

function Live_events() {
    return (
    
    <div>
      <h1>LIVE EVENTS</h1>
      <div className='container'>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
          <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
      <div className="carousel-inner">
            <div className="carousel-item active">
           <a href="#"> <img src="https://res.cloudinary.com/cloud0310/image/upload/v1660120843/cld-sample-4.jpg" className="img-fluid " alt="..."/></a>
            <div className="carousel-caption d-none d-md-block">
              <h3>First slide label</h3>
            </div>
          </div>

          <div className="carousel-item">
            <a href="#"><img src="https://res.cloudinary.com/cloud0310/image/upload/v1660120843/cld-sample-4.jpg" className="img-fluid" alt="..."/></a>
            <div className="carousel-caption d-none d-md-block">
              <h3>Second slide label</h3>
            </div>
          </div>Name

          <div className="carousel-item">
            <a href=""><img src="https://res.cloudinary.com/cloud0310/image/upload/v1660120843/cld-sample-4.jpg" className="img-fluid" alt="..."/></a>
            <div className="carousel-caption d-none d-md-block">
              <h3>Third slide label</h3>
            </div>
          </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<div className="col-3"></div>
          </div>
        </div>
      </div>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.min.js" integrity="sha384-ODmDIVzN+pFdexxHEHFBQH3/9/vQ9uori45z4JjnFsRydbmQbmL5t1tQ0culUzyK" crossorigin="anonymous"></script>
    </div>

    );
  }
  
  export default Live_events;