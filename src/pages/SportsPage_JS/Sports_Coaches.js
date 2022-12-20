import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard1 } from "./ProjectCard1";
import projImg1 from "../../assets/project-img1.png";
import projImg2 from "../../assets/project-img2.png";
import projImg3 from "../../assets/project-img3.png";
import colorSharp2 from "../../assets/color-sharp2.png";
import "animate.css";

function Sports_Gallery() {
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
      <h2>COACHES</h2>
      <Container>
        <Row>
          <Col size={12}>
            {/* 
            <Tab.Container id="projects-tabs" defaultActiveKey="first"> */}
            {/* <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">COACHES</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first"> */}
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard1 key={index} {...project} />;
              })}
            </Row>
            {/* </Tab.Pane>
              </Tab.Content>
            </Tab.Container> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Sports_Gallery;
