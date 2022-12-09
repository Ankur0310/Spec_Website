// import React from "react";
// import "./Gallery.css";
// import img3 from "../../img/s3.jpg";

// const Gallery = () => {
//   //     // Instantiate the Bootstrap carousel
//   // $('.multi-item-carousel').carousel({
//   //     interval: false
//   //   });

//   //   // for every slide in carousel, copy the next slide's item in the slide.
//   //   // Do the same for the next, next item.
//   //   $('.multi-item-carousel .item').each(function(){
//   //     var next = $(this).next();
//   //     if (!next.length) {
//   //       next = $(this).siblings(':first');
//   //     }
//   //     next.children(':first-child').clone().appendTo($(this));

//   //     if (next.next().length>0) {
//   //       next.next().children(':first-child').clone().appendTo($(this));
//   //     } else {
//   //         $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
//   //     }
//   //   });
//   return (
//     <div className="gallery_main">
//       <h1 className="Gallery_heading text-center">Gallery</h1>

//       <div className="container">
//         <div className="row">
//           <div className="col-md-12 s_flex_cont">

//             <div className="flex-item">
//             <img src={img3} alt="" />
//             </div>

//             <div className="flex-item">
//             <img src={img3} alt="" />
//             </div>

//             <div className="flex-item">
//             <img src={img3} alt="" />
//             </div>

//             <div className="flex-item">
//             <img src={img3} alt="" />
//             </div>

//           </div>
//         </div>
//       </div>
//       <hr />
//     </div>
//   );
// };

// export default Gallery;

import React from "react";
import "../../styles/SportsPage_CSS/Sports_Gallery.css";
// import img1 from "../../img/s1.jpg";
// import img2 from "../../img/s2.jpg";
// import img3 from "../../img/s3.jpg";
// import img4 from "../../img/s4.jpg";
// import img5 from "../../img/s5.jpg";
// import img6 from "../../img/s6.jpg";

function Gallery() {
  return (
    //     <div className="main_div_sports">
    //       <h1 className="text-center">GALLERY</h1>
    //       <div class="cards-list">

    //   <div class="card 1">
    //     <div class="card_image">  <img src={img1} alt="" /> </div>
    //     <div class="card_title title-white">
    //       <p>Basketball</p>
    //     </div>
    //   </div>

    //     <div class="card 2">
    //     <div class="card_image">
    //     <img src={img2} alt="" />
    //       </div>
    //     <div class="card_title title-white">
    //       <p>Volley Ball</p>
    //     </div>
    //   </div>

    //   <div class="card 3">
    //     <div class="card_image">
    //     <img src={img3} alt="" />
    //     </div>
    //     <div class="card_title title-white">
    //       <p>Cricket</p>
    //     </div>
    //   </div>

    //   <div class="card 4">
    //   <div class="card_image">
    //   <img src={img4} alt="" />
    //     </div>
    //   <div class="card_title title-white">
    //     <p>Hockey</p>
    //   </div>
    //   </div>

    //   <div class="card 5">
    //   <div class="card_image">
    //   <img src={img5} alt="" />
    //     </div>
    //   <div class="card_title title-white">
    //     <p>Badminton</p>
    //   </div>
    //   </div>

    //   <div class="card 6">
    //   <div class="card_image">
    //   <img src={img6} alt="" />
    //     </div>
    //   <div class="card_title title-white">
    //     <p>Tennis</p>
    //   </div>
    //   </div>

    // </div>
    //     </div>
    <>
      <h1>Sports_Gallery</h1>
    </>
  );
}

export default Gallery;
