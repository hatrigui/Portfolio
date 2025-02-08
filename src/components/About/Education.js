import React from "react";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <Container fluid className="education-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="blue">Education</strong>
        </h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2024 - Present"
            icon={<FaGraduationCap />}
            iconStyle={{ background: "#007bff", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              M.Sc in Information Processing and Complexity of Living Systems
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              National Engineering School of Tunis (ENIT), Tunisia
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2022 - Present"
            icon={<FaGraduationCap />}
            iconStyle={{ background: "#007bff", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Telecommunications Engineering with Minors in Data Science and AI
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              National Engineering School of Tunis (ENIT), Tunisia
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Sep 2020 - Jun 2022"
            icon={<FaGraduationCap />}
            iconStyle={{ background: "#007bff", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Pre-Engineering Studies in Mathematics and Physics
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Preparatory Institute for Engineering Studies of El-Manar, Tunisia
            </h4>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="Jun 2020"
            icon={<FaGraduationCap />}
            iconStyle={{ background: "#007bff", color: "#fff" }}
          >
            <h3 className="vertical-timeline-element-title">
              Baccalaureate Diploma (Mathematics Section)
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Tahar Sfar High School, Mahdia, Tunisia
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Container>
    </Container>
  );
}

export default Education;
