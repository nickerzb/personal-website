import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "./certification-card.scss";
import Row from "react-bootstrap/Row";

const CertificationCard: React.FC<Certification> = (
  certification: Certification
) => (
  <Col xs={12} className="space-top-md" key={certification.title}>
    <Card>
      <Card.Body>
        <Row>
          <Col xs={7} sm={9}>
            <a
              href={certification.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {certification.title}
            </a>
          </Col>
          <Col xs={5} sm={3}>
            <span style={{ float: "right" }}>
              {new Date(certification.start_date).getFullYear()} -{" "}
              {new Date(certification.end_date).getFullYear()}
            </span>
          </Col>
        </Row>
        <div style={{ height: "100%" }}>
          <img
            style={{ height: "75px" }}
            src={certification.image_url}
            alt={`${certification.title} badge`}
          />
          <span className="certification-number">{certification.number}</span>
        </div>
      </Card.Body>
    </Card>
  </Col>
);

export default CertificationCard;
