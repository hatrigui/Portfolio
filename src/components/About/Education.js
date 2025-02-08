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
        <VerticalTimeline>
        <VerticalTimelineElement
  className="vertical-timeline-element--education"
  date="Jan 2025 - Present"
  icon={<FaGraduationCap />}
  iconStyle={{ background: "#007bff", color: "#fff" }}
  contentStyle={{ background: "#0a192f", color: "white", borderRadius: "8px", padding: "15px" }}
>
  <h3 className="vertical-timeline-element-title">
  <strong className="blue"> M.Sc in Vision and Intelligent Machines </strong>
  </h3>
  <h4 className="vertical-timeline-element-subtitle">
  Université Paris Cité, France
  </h4>
</VerticalTimelineElement>
        <VerticalTimelineElement
  className="vertical-timeline-element--education"
  date="Sep 2024 - Present"
  icon={<FaGraduationCap />}
  iconStyle={{ background: "#007bff", color: "#fff" }}
  contentStyle={{ background: "#0a192f", color: "white", borderRadius: "8px", padding: "15px" }}
>
  <h3 className="vertical-timeline-element-title">
  <strong className="blue"> M.Sc in Information Processing and Complexity of Living Systems </strong>
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
            <strong className="blue">Telecommunications Engineering with Minors in Data Science </strong>
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
            <strong className="blue"> Pre-Engineering Studies in Mathematics and Physics </strong>
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
            <strong className="blue"> Baccalaureate Diploma (Mathematics Section) </strong>
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
