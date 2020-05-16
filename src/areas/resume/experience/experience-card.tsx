import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { OPEN_MODAL } from "../../../common/redux/modal-actions";

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

const ExperienceCard: React.FC<Job> = (job: Job) => {
  const dispatch = useDispatch();
  const lastTitle = job.titles[0];
  return (
    <Col
      sm={{ offset: 1, span: 10 }}
      lg={{ offset: 2, span: 8 }}
      xl={{ offset: 3, span: 6 }}
      className="space-top-md"
      key={job.id}
    >
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
            <i className="d-none d-md-inline-block">, {lastTitle.title}</i>
            <span style={{ float: "right" }}>
              {new Date(job.start_date).getFullYear()} -{" "}
              {job.end_date ? new Date(job.end_date).getFullYear() : "Current"}
            </span>
          </div>
          <i className="d-md-none">{lastTitle.title}</i>
          <div style={{ marginTop: "10px" }}>
            <Button
              className="space-around-sm"
              variant="outline-primary"
              size="sm"
              onClick={() =>
                dispatch({
                  type: OPEN_MODAL,
                  payload: {
                    title: "Achievements",
                    body: renderAchievements(job.achievements)
                  }
                })
              }
            >
              Achievements
            </Button>
            {job.blog_posts && (
              <Button
                className="space-around-sm"
                variant="outline-primary"
                size="sm"
              >
                Blog Posts
              </Button>
            )}
            <Button
              className="space-around-sm"
              variant="outline-primary"
              size="sm"
            >
              Titles
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
