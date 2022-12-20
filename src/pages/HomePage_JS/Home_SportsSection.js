// import React from "react";
// import "../../styles/HomePage_CSS/Home_SportsSection.css";
// import img1 from "../../assets/s1.jpg";
// import img2 from "../../assets/s2.jpg";
// import img3 from "../../assets/s3.jpg";
// import img4 from "../../assets/s4.jpg";
// import img5 from "../../assets/s5.jpg";
// import img6 from "../../assets/s6.jpg";

// function Sports() {
//   return (
//     <div className="main_div_sports">
//       <h1 className="text-center">SPORTS</h1>
//       <div class="cards-list">
//         <div class="card 1">
//           <div class="card_image">
//             {" "}
//             <img src={img1} alt="" />{" "}
//           </div>
//           <div class="card_title title-white">
//             <p>Basketball</p>
//           </div>
//         </div>

//         <div class="card 2">
//           <div class="card_image">
//             <img src={img2} alt="" />
//           </div>
//           <div class="card_title title-white">
//             <p>Volley Ball</p>
//           </div>
//         </div>

//         <div class="card 3">
//           <div class="card_image">
//             <img src={img3} alt="" />
//           </div>
//           <div class="card_title title-white">
//             <p>Cricket</p>
//           </div>
//         </div>

//         <div class="card 4">
//           <div class="card_image">
//             <img src={img4} alt="" />
//           </div>
//           <div class="card_title title-white">
//             <p>Hockey</p>
//           </div>
//         </div>

//         <div class="card 5">
//           <div class="card_image">
//             <img src={img5} alt="" />
//           </div>
//           <div class="card_title title-white">
//             <p>Badminton</p>
//           </div>
//         </div>

//         <div class="card 6">
//           <div class="card_image">
//             <img src={img6} alt="" />
//           </div>
//           <div class="card_title title-white">
//             <p>Tennis</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Sports;

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard1 } from "../SportsPage_JS/ProjectCard1";
import projImg1 from "../../assets/project-img1.png";
import projImg2 from "../../assets/project-img2.png";
import projImg3 from "../../assets/project-img3.png";

import "animate.css";

function Home_SportsSection() {
  const projects = [
    {
      title: "Some Heading",
      description: "Details",
      imgUrl: projImg1,
    },
    {
      title: "Some Heading",
      description: "Details",
      imgUrl: projImg2,
    },
    {
      title: "Some Heading",
      description: "Details",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <h2>SPORTS</h2>
      <Container>
        <Row>
          <Col size={12}>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard1 key={index} {...project} />;
              })}
            </Row>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard1 key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
export default Home_SportsSection;
