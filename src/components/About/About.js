import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import TechAndToolstack from "./TechAndToolstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Education from "./Education";
import Extracurricular from "./Extracurricular";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="blue">I am</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
          <h1 className="project-heading">
          My <strong className="blue">Education </strong>
        </h1>
          <Education />
        </Row>
        <h1 className="project-heading">
          Professional <strong className="blue">Skillset & Tools </strong> I Use
        </h1>

        <TechAndToolstack />

        <h1 className="project-heading">
  Extracurricular <strong className="blue">Activities</strong>
</h1>
<Extracurricular />

        
      </Container>
    </Container>
  );
}

export default About;
