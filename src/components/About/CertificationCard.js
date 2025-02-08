import React from "react";
import { Card} from "react-bootstrap";

function CertificationCard({ imgPath, title, description }) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={imgPath} alt={title} className="certification-img" />
      <Card.Body>
        <Card.Title><span className="blue">{title}</span></Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CertificationCard;
