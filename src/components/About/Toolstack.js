import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
} from "react-icons/si";
import { DiVisualstudio, DiCisco, DiDocker, DiAws} from "react-icons/di";


function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiCisco />
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <DiVisualstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiAws />
      </Col>
      
      
    </Row>
  );
}

export default Toolstack;
