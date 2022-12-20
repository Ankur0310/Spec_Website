import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard3 } from "./ProjectCard3";
import "../../styles/TeamPage_CSS/Admins.css";
import projImg1 from "../../assets/project-img1.png";
import projImg2 from "../../assets/project-img2.png";
import projImg3 from "../../assets/project-img3.png";
import colorSharp2 from "../../assets/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

function Admins() {
  const projects = [
    {
      title: "Some Heading",
      description: "Details",
      imgUrl: projImg1,
    },
    {
      title: "Some Heading",
      description: "Details",
      imgUrl: projImg1,
    },
    {
      title: "Some Heading",
      description: "Details",
      imgUrl: projImg1,
    },
    {
      title: "Some Heading",
      description: "Details",
      imgUrl: projImg1,
    },
    {
      title: "Some Heading",
      description: "Details",
      imgUrl: projImg1,
    },
    {
      title: "Some Heading",
      description: "Details",
      imgUrl: projImg1,
    },
  ];

  return (
    <section className="project1" id="project1">
      <h2>ADMINISTRATION</h2>
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard3 key={index} {...project} />;
                    })}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Admins;
