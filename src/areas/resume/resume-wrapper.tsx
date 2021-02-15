import React from "react";
import Experience from "./experience/experience-wrapper";
import Certifications from "./certifications/certification-wrapper";
import Technologies from "./technologies/technologies-wrapper";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./resume-styles.scss";
import { getCertificationsInfo, getJobInfo } from "../../common/api/resume";
import { useQuery } from "react-query";
import LoadingSpinner from "../../common/components/loading-spinner";

const ResumeWrapper: React.FC = () => {
  const {
    data: certifications,
    isLoading: certIsLoading,
    error: certError
  } = useQuery("certifications", getCertificationsInfo);

  const { data: jobs, isLoading: jobIsLoading, error: jobError } = useQuery(
    "jobs",
    getJobInfo
  );

  if (certIsLoading || jobIsLoading) {
    return <LoadingSpinner />;
  }

  if (certError || jobError) {
    return (
      <div>
        Oops something went wrong... <br />
        {certError?.message}
        {jobError?.message}
      </div>
    );
  }

  return (
    <Row id="resume">
      <Col
        sm={{ offset: 1, span: 10 }}
        lg={{ offset: 2, span: 8 }}
        xl={{ offset: 3, span: 6 }}
        className="space-top-sm"
      >
        <Experience jobs={jobs || []} />
        <Certifications certifications={certifications || []} />
        <Technologies />
      </Col>
    </Row>
  );
};

export default ResumeWrapper;
