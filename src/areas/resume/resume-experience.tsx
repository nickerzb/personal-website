import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useQuery } from "react-query";
import { getJobInfo } from "../../common/api/resume";
import LoadingSpinner from "../../common/components/loading-spinner";
import Card from "react-bootstrap/Card";

const renderAchievements = (achievements: Achievement[]) => (
  <ul>
    {achievements.map(achievement => (
      <>
        <li key={achievement.text}>
          {achievement.link && (
            <a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {achievement.text}
            </a>
          )}
          {!achievement.link && achievement.text}
        </li>
        {achievement.sub_achievements
          ? renderAchievements(achievement.sub_achievements)
          : null}
      </>
    ))}
  </ul>
);

const renderJobCard = (job: Job) => (
  <Row className={job.id !== 0 ? "space-top-lg" : "space-top-sm"} key={job.id}>
    <Col sm={{ offset: 1 }}>
      <Card>
        <Card.Body>
          <div>
            <a
              href={job.company_website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i>{job.company_name}</i>
            </a>
            <i>, {job.current_title}</i>
            <span style={{ float: "right" }}>
              {job.start_date.getFullYear()} -{" "}
              {job.end_date ? job.end_date.getFullYear() : "Current"}
            </span>
          </div>
          {renderAchievements(job.achievements)}
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

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
        <Col>
          <h6>Work Experience</h6>
        </Col>
      </Row>
      {jobs?.map(renderJobCard)}
    </>
  );
};

export default Experience;
