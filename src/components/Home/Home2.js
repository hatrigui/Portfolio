import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/lahtim.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            <b className="blue"> AI Engineer </b> in the making ⌛
              <br />
              <br />
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="blue"> Python, Matlab, C, C++, Java, Javascript. </b>
              </i>
              <br />
              <br />
              My field of interest lies in developing innovative solutions through AI, exploring its applications across various domains.  
<i>
  I am particularly passionate about 
  <b className="blue"> computer vision and segmentation in healthcare</b>, 
  as well as 
  <b className="blue"> object detection in industrial settings</b>.
</i>
<br />
<br />
Whenever possible, I apply my expertise in AI-driven technologies, utilizing  
<b className="blue"> deep learning</b> and  
<i>
  <b className="blue"> advanced machine learning frameworks </b>
</i> 
to build intelligent and efficient solutions.
<br />
<br />
My goal is to continuously explore and expand AI’s potential to solve real-world challenges, creating impactful innovations across multiple industries 🚀.

            </p>
          </Col>
          <Col md={4} className="myAvtar mt-5">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/hatrigui"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hatem-trigui-150b3b220/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
