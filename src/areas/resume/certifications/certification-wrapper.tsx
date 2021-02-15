import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CertificationCard from "./certification-card";

export interface CertificationsProps {
  certifications: Certification[];
}

const Certifications: React.FC<CertificationsProps> = ({ certifications }) => (
  <>
    <Row className="space-top-lg">
      <Col>
        <h4 className="section-header no-bottom-margin">Certifications</h4>
      </Col>
    </Row>
    <Row>{certifications.map(CertificationCard)}</Row>
  </>
);

export default Certifications;
