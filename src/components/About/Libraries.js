import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiKeras,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiPlotly,
  SiSpacy,
  SiHuggingface,
    

} from "react-icons/si";
import { DiSpark} from "react-icons/di";


function Libraries() {
  return (
    <div className="libraries">
      <h2 className="text-center my-4"></h2>

      <Row style={{ justifyContent: "center", paddingBottom: "20px" }}>
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

export default Libraries;
