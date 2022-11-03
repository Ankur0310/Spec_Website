import React from "react";
import "./Sports.css";
import img1 from "../../img/s1.png";
import img2 from "../../img/s2.png";
import img3 from "../../img/s3.png";
import img4 from "../../img/s4.png";
import img5 from "../../img/s5.png";
import img6 from "../../img/s6.png";


function Sports() {
  return (
    <div>
        <h1 className="text-center"> SPORTS</h1>
        <div class="s_container">
	        <div class="row">
                <div class="col-md-12 s_flex-container">

                        <div class="flex-item">
                            <div class="flex-item-inner">
                                <a href="#">
                                    <div class="tile-primary-content">
                                    <img src={img1} alt="" />
                                    </div>
                                    <div class="tile-secondary-content">
                                       <h3>Basketball</h3>
                                    </div>
                                </a>
                            
                            </div>
                        </div>

                        <div class="flex-item">
                            <div class="flex-item-inner">
                                <a href="#">
                                    <div class="tile-primary-content">
                                    <img src={img2} alt="" />
                                    </div>
                                    <div class="tile-secondary-content">
                                       <h3>volley ball</h3>
                                    </div>
                                </a>
                            
                            </div>
                        </div>

                        <div class="flex-item">
                            <div class="flex-item-inner">
                                <a href="#">
                                    <div class="tile-primary-content">
                                    <img src={img3} alt="" />
                                    </div>
                                    <div class="tile-secondary-content">
                                       <h3>cricket</h3>
                                    </div>
                                </a>
                            
                            </div>
                        </div>

                        <div class="flex-item">
                            <div class="flex-item-inner">
                                <a href="#">
                                    <div class="tile-primary-content">
                                    <img src={img4} alt="" />
                                    </div>
                                    <div class="tile-secondary-content">
                                       <h3>hockey</h3>
                                    </div>
                                </a>
                            
                            </div>
                        </div>

                        <div class="flex-item">
                            <div class="flex-item-inner">
                                <a href="#">
                                    <div class="tile-primary-content">
                                    <img src={img5} alt="" />
                                    </div>
                                    <div class="tile-secondary-content">
                                       <h3>badminton</h3>
                                    </div>
                                </a>
                            
                            </div>
                        </div>

                        <div class="flex-item">
                            <div class="flex-item-inner">
                                <a href="#">
                                    <div class="tile-primary-content">
                                    <img src={img6} alt="" />
                                    </div>
                                    <div class="tile-secondary-content">
                                       <h3>tennis</h3>
                                    </div>
                                </a>
                            
                            </div>
                        </div>                        
            
            
            
            
           
            
        </div>
    </div>
</div>
    </div>
  );
}

export default Sports;
