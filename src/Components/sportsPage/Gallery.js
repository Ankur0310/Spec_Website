import React from 'react'
import './Gallery.css'

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
    <div className='gallery_main'>
        <h1 className='Gallery_heading'>Gallery</h1>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <div className="carousel slide multi-item-carousel" id="theCarousel">
                    <div className="carousel-inner">
                    <div className="item active">
                        <div className="col-xs-4"><img src="https://source.unsplash.com/300x300/?perth,australia" alt='another-img' className="img-responsive" /></div>
                    </div>
                    <div className="item">
                        <div className="col-xs-4"><img src="https://source.unsplash.com/300x300/?fremantle,australia" alt='another-img' className="img-responsive" /></div>
                    </div>
                    <div className="item">
                        <div className="col-xs-4"><img src="https://source.unsplash.com/300x300/?west-australia" alt='another-img' className="img-responsive" /></div>
                    </div>
                    <div className="item">
                        <div className="col-xs-4"><img src="https://source.unsplash.com/300x300/?perth" alt='another-img' className="img-responsive" /></div>
                    </div>
                    <div className="item">
                        <div className="col-xs-4"><img src="https://source.unsplash.com/300x300/?quokka,perth" alt='another-img' className="img-responsive" /></div>
                    </div>
                    <div className="item">
                        <div className="col-xs-4"><img src="https://source.unsplash.com/300x300/?margaretriver,australia" alt='another-img' className="img-responsive" /></div>
                    </div>
                    
                    <div className="item">
                        <div className="col-xs-4"><img src="https://source.unsplash.com/300x300/?perth,australia&r=7" alt='another-img' className="img-responsive" /></div>
                    </div>
                    
                    </div>
                    <a className="left carousel-control" href="#theCarousel" data-slide="prev"><i className="glyphicon glyphicon-chevron-left"></i></a>
                    <a className="right carousel-control" href="#theCarousel" data-slide="next"><i className="glyphicon glyphicon-chevron-right"></i></a>
                </div>
                </div>
            </div>
            </div>
            <hr/>
    </div>
  )
}

export default Gallery