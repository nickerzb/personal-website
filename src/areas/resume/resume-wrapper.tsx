import React from "react";
import Experience from "./experience/experience-wrapper";
import Certifications from "./certifications/certification-wrapper";
import Technologies from "./technologies/technologies-wrapper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./resume-styles.scss";

const ResumeWrapper: React.FC = () => (
  <Row id="resume">
    <Col
      sm={{ offset: 1, span: 10 }}
      lg={{ offset: 2, span: 8 }}
      xl={{ offset: 3, span: 6 }}
      className="space-top-sm"
    >
      <Experience />
      <Certifications />
      <Technologies />
    </Col>
  </Row>
);

export default ResumeWrapper;
