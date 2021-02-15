import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ExperienceCard from "./experience-card";

export interface ExperienceProps {
  jobs: Job[];
}

const Experience: React.FC<ExperienceProps> = ({ jobs }) => (
  <>
    <Row>
      <Col>
        <h4 className="section-header no-bottom-margin">Work Experience</h4>
      </Col>
    </Row>
    <Row>
      {jobs.map(job => (
        <ExperienceCard job={job} key={job.company_name} />
      ))}
    </Row>
  </>
);

export default Experience;
