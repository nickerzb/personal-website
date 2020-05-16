import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useQuery } from "react-query";
import { getJobInfo } from "../../../common/api/resume";
import LoadingSpinner from "../../../common/components/loading-spinner";
import ExperienceCard from "./experience-card";

const Experience: React.FC = () => {
  const { data: jobs, isLoading, error } = useQuery("jobs", getJobInfo);

  if (isLoading) {
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
        <Col sm={{ offset: 1 }} lg={{ offset: 2 }} xl={{ offset: 3 }}>
          <h4 className="section-header no-bottom-margin">Work Experience</h4>
        </Col>
      </Row>
      <Row>{jobs?.map(ExperienceCard)}</Row>
    </>
  );
};

export default Experience;