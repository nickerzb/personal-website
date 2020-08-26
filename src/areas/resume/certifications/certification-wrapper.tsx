import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useQuery } from "react-query";
import { getCertificationsInfo } from "../../../common/api/resume";
import LoadingSpinner from "../../../common/components/loading-spinner";
import CertificationCard from "./certification-card";

const Certifications: React.FC = () => {
  const { data: certifications, isLoading, error } = useQuery(
    "certifications",
    getCertificationsInfo
  );

  if (isLoading || !certifications) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div>
        Oops something went wrong... <br />
        {error.message}
      </div>
    );
  }

  return (
    <>
      <Row className="space-top-lg">
        <Col>
          <h4 className="section-header no-bottom-margin">Certifications</h4>
        </Col>
      </Row>
      <Row>{certifications.map(CertificationCard)}</Row>
    </>
  );
};

export default Certifications;
