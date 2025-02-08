import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Hatem Trigui </span>
            from <span className="blue"> Tunisia.</span>
            <br />
            <ImPointRight /> Final year <span className="blue"> ICT engineering student  </span>with a major in telecommunications and minor in Data Science at ENIT.
            <br />
            <ImPointRight /> Pursuing a double degree <span className="blue"> Master’s program </span> in Information and Communication Technologies at ENIT, complemented by the Vision and Intelligent Machines track from the UFR Mathematics and Computer Science at Université Paris Cité.
            <br />
            <ImPointRight />  With a passion for AI, machine learning, and web development. I specialize in building intelligent systems that solve real-world problems.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Hatem</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
