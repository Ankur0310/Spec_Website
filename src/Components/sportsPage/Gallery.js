import React from "react";
import "./Gallery.css";
import img3 from "../../img/s3.png";

const Gallery = () => {
  //     // Instantiate the Bootstrap carousel
  // $('.multi-item-carousel').carousel({
  //     interval: false
  //   });

  //   // for every slide in carousel, copy the next slide's item in the slide.
  //   // Do the same for the next, next item.
  //   $('.multi-item-carousel .item').each(function(){
  //     var next = $(this).next();
  //     if (!next.length) {
  //       next = $(this).siblings(':first');
  //     }
  //     next.children(':first-child').clone().appendTo($(this));

  //     if (next.next().length>0) {
  //       next.next().children(':first-child').clone().appendTo($(this));
  //     } else {
  //         $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
  //     }
  //   });
  return (
    <div className="gallery_main">
      <h1 className="Gallery_heading text-center">Gallery</h1>

      <div className="container">
        <div className="row">
          <div className="col-md-12 s_flex_cont">

            <div className="flex-item">
            <img src={img3} alt="" />
            </div>

            <div className="flex-item">
            <img src={img3} alt="" />
            </div>

            <div className="flex-item">
            <img src={img3} alt="" />
            </div>

            <div className="flex-item">
            <img src={img3} alt="" />
            </div>


          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Gallery;
