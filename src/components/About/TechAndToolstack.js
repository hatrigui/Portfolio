import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  CgCPlusPlus
} from "react-icons/cg";
import {
  DiJavascript1, DiReact, DiNodejs, DiMongodb, DiPython, DiGit, DiJava,
  DiDjango, DiHtml5, DiCss3, DiMysql, DiDocker, DiVisualstudio, DiAws, DiSpark
} from "react-icons/di";
import {
  SiNextdotjs, SiFlask, SiFastapi, SiElasticsearch, SiLogstash, SiKibana, SiPostman,SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiSpacy,
  SiHuggingface,
  SiC,
} from "react-icons/si";

function TechAndToolstack() {
  return (
    <div>
      {/* Web Development */}
      <h2 className="tech-category">Web Development</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons"><DiHtml5 /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiCss3 /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiJavascript1 /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiReact /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiNextdotjs /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiNodejs /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiDjango /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiFlask /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiFastapi /></Col>
      </Row>

      {/* Databases & Data Processing */}
      <h2 className="tech-category">Databases & Data Processing</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons"><DiMongodb /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiMysql /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiElasticsearch /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiLogstash /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiKibana /></Col>
      </Row>

      {/* Programming Languages */}
      <h2 className="tech-category">Programming Languages</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiJava /></Col>
        <Col xs={4} md={2} className="tech-icons"><CgCPlusPlus /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiC /></Col>
      </Row>

      {/* DevOps & Tools */}
      <h2 className="tech-category">DevOps & Tools</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiDocker /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiAws /></Col>
        <Col xs={4} md={2} className="tech-icons"><DiVisualstudio /></Col>
        <Col xs={4} md={2} className="tech-icons"><SiPostman /></Col>
      </Row>

      {/* Databases & Data Processing */}
      <h2 className="tech-category">ML/DL Libraries & Frameworks</h2>
      <Row style={{ justifyContent: "center", paddingBottom: "30px" }}>
        <Col xs={4} md={2} className="tech-icons">
                  <SiTensorflow /> {/* TensorFlow */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                  <SiPytorch /> {/* PyTorch */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                  <SiKeras /> {/* Keras */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                <DiSpark />
                </Col>
        
                <Col xs={4} md={2} className="tech-icons">
                  <SiScikitlearn /> {/* Scikit-Learn */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                  <SiNumpy /> {/* NumPy */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                  <SiPandas /> {/* Pandas */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                  <SiPlotly /> {/* Plotly */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                  <SiOpencv /> {/* OpenCV */}
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                  <SiSpacy />
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                  <SiHuggingface />
                </Col>
      </Row>
    </div>

    
  );
}

export default TechAndToolstack;
