import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import ieeeLogo from "../../Assets/logos/ieee.png";
import aiesecLogo from "../../Assets/logos/aiesec.png";
import rotaractLogo from "../../Assets/logos/rotaract.png";
import interactLogo from "../../Assets/logos/interact.png";

function Extracurricular() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="October 2022 - Present"
        iconStyle={{ background: "#fff" }}
        icon={<img src={ieeeLogo} alt="IEEE" style={{ width: "100%", height: "100%" }} />}
      >
        <h3 className="vertical-timeline-element-title"><strong className="blue">Member, Project Manager, OC, ExCom Manager</strong> </h3>
        <h4 className="vertical-timeline-element-subtitle">IEEE ENIT SB</h4>
      </VerticalTimelineElement>


      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="February 2023 - June 2023"
        iconStyle={{ background: "#fff" }}
        icon={<img src={aiesecLogo} alt="AIESEC" style={{ width: "100%", height: "100%" }} />}
      >
        <h3 className="vertical-timeline-element-title"> <strong className="blue"> Volunteer </strong></h3>
        <h4 className="vertical-timeline-element-subtitle">AIESEC in Tunisia - Manar</h4>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="September 2020 - December 2022"
        iconStyle={{ background: "#fff" }}
        icon={<img src={rotaractLogo} alt="Rotaract" style={{ width: "100%", height: "100%" }} />}
      >
        <h3 className="vertical-timeline-element-title"> <strong className="blue"> Volunteer </strong></h3>
        <h4 className="vertical-timeline-element-subtitle">Rotaract Club Mahdia</h4>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2017 - 2020"
        iconStyle={{ background: "#fff" }}
        icon={<img src={interactLogo} alt="Interact" style={{ width: "100%", height: "100%" }} />}
      >
        <h3 className="vertical-timeline-element-title"> <strong className="blue"> Lead, Member, Committee Chief </strong> </h3>
        <h4 className="vertical-timeline-element-subtitle">Interact Club Mahdia</h4>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Extracurricular;
