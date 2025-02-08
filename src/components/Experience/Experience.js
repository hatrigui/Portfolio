import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Container } from "react-bootstrap";
import Particle from "../Particle";
// Import logos
import plenensysLogo from "../../Assets/logos/plenesys.png";
import plugntelLogo from "../../Assets/logos/plugntel.png";
import womiaLogo from "../../Assets/logos/womia.png";
import ieeeLogo from "../../Assets/logos/ieee.png";
import primatecLogo from "../../Assets/logos/primatec.png";

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
    <section id="experience">
      <h1 className="project-heading">
        Work <strong className="blue">Experience</strong>
      </h1>
      
      <VerticalTimeline>
        {/* PLENESYS */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 2024 - Jan 2025"
          iconStyle={{ background: "#fff" }}
          icon={<img src={plenensysLogo} alt="Plenensys" style={{ width: "100%", height: "100%" }} />}
        >
          <h3 className="vertical-timeline-element-title"> <strong className="blue"> Deep Learning R&D Trainee </strong></h3>
          <h4 className="vertical-timeline-element-subtitle">Plenesys | Real-Time Electrode Detection and Tracking</h4>
          <p>
          <ul>
            <li>Developed a deep learning-based system to track and detect electrodes in plasma torches exposed to extreme heat using YOLOv8 for detection and Kalman Filters for tracking.</li>
            <li>Solved occlusion problems and multiple object tracking challenges using advanced AI models.</li>
            </ul>
          </p>
        </VerticalTimelineElement>

        {/* PLUG&TEL */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 2024 – Aug 2024"
          iconStyle={{ background: "#fff" }}
          icon={<img src={plugntelLogo} alt="Plug&Tel" style={{ width: "100%", height: "100%" }} />}
        >
          <h3 className="vertical-timeline-element-title"> <strong className="blue"> Software Engineering Intern </strong></h3>
          <h4 className="vertical-timeline-element-subtitle">Plug&Tel | Engineering Internship</h4>
          <p>
          <ul>
            <li>Developed microservices using NestJS and MongoDB.</li>
            <li>Integrated queue systems for automation & workflow optimization.</li>
            <li>Built logging & monitoring systems using ELK Stack & Winston.</li>
            <li>Worked in an Agile/Scrum environment with Jira & Confluence.</li>
          </ul>
          </p>
        </VerticalTimelineElement>

        {/* SILANOV */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Nov 2023 – May 2024"
          iconStyle={{ background: "#fff" }}
          icon={<img src={womiaLogo} alt="Silanov" style={{ width: "100%", height: "100%" }} />}
        >
          <h3 className="vertical-timeline-element-title"> <strong className="blue"> Deep Learning Trainee </strong></h3>
          <h4 className="vertical-timeline-element-subtitle">Silanov & Womia Startups | End of Year Project II</h4>
          <p>
            Built Aorte+, a Django-based web app for Aortic structures segmentation from cardiac MRIs using YOLOv8 & U-Net.
          </p>
        </VerticalTimelineElement>

        {/* IEEE */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct 2023 – Dec 2023"
          iconStyle={{ background: "#fff" }}
          icon={<img src={ieeeLogo} alt="IEEE" style={{ width: "100%", height: "100%" }} />}
        >
          <h3 className="vertical-timeline-element-title"> <strong className="blue"> Technical Challenge Lead </strong></h3>
          <h4 className="vertical-timeline-element-subtitle">IEEE ENIT SB | IEEE TSYP 11 SMC&EDSOC</h4>
          <p>
          <ul>
            <li>Conducted a survey on student well-being and analyzed stress factors using NLP.</li>
            <li>Developed a ReactJS app to provide visual insights into the data.</li>
            <li>Led the team to win 1st place among 16 competing teams.</li>
          </ul>
          </p>
        </VerticalTimelineElement>

        {/* PRIMATEC ENGINEERING */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Jun 2023 – Jul 2023"
          iconStyle={{ background: "#fff" }}
          icon={<img src={primatecLogo} alt="Primatec" style={{ width: "100%", height: "100%" }} />}
        >
          <h3 className="vertical-timeline-element-title"> <strong className="blue"> Summer Intern </strong></h3>
          <h4 className="vertical-timeline-element-subtitle">Primatec Engineering</h4>
          <p>
          <ul>
            <li>Worked on ASAM Standard integration in the odxtools open-source project.</li>
            <li>Gained hands-on experience in automotive engineering & ECU technologies.</li>
          </ul>
          </p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </section>
    </Container>
    </Container>
  );
}

export default Experience;
