import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { OPEN_MODAL } from "../../../common/redux/modal-actions";

const renderAchievements = (achievements: Achievement[]) => (
  <ul>
    {achievements.map(achievement => (
      <div key={achievement.text}>
        <li>
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
      </div>
    ))}
  </ul>
);

const renderBlogPosts = (blogs: Blog[]) =>
  blogs.map(blog => (
    <div key={blog.title}>
      <h6>
        <a href={blog.link} target="_blank" rel="noopener noreferrer">
          {blog.title}
        </a>
      </h6>
      <small>Published on {new Date(blog.published_date).toDateString()}</small>
      <p>{blog.description}</p>
    </div>
  ));

const renderTitles = (titles: Title[]) => (
  <ul>
    {titles.map(title => (
      <li key={`${title.title}_${title.start_date}`}>
        {title.title}
        <ul>
          <li>
            {new Date(title.start_date).toLocaleDateString()} -{" "}
            {title.end_date
              ? new Date(title.end_date).toLocaleDateString()
              : "Current"}
          </li>
        </ul>
      </li>
    ))}
  </ul>
);

const ExperienceCard: React.FC<Job> = (job: Job) => {
  const dispatch = useDispatch();
  const lastTitle = job.titles[0];
  return (
    <Col xs={12} className="space-top-md" key={job.company_name}>
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
              className="space-right"
              size="sm"
              onClick={() =>
                dispatch({
                  type: OPEN_MODAL,
                  payload: {
                    title: `Achievements (${job.company_name})`,
                    body: renderAchievements(job.achievements)
                  }
                })
              }
            >
              Achievements
            </Button>
            {job.blog_posts && (
              <Button
                className="space-right"
                size="sm"
                onClick={() =>
                  dispatch({
                    type: OPEN_MODAL,
                    payload: {
                      title: `Blog Posts (${job.company_name})`,
                      body: renderBlogPosts(job.blog_posts)
                    }
                  })
                }
              >
                Blog Posts
              </Button>
            )}
            <Button
              className="space-right"
              size="sm"
              onClick={() =>
                dispatch({
                  type: OPEN_MODAL,
                  payload: {
                    title: `Titles (${job.company_name})`,
                    body: renderTitles(job.titles)
                  }
                })
              }
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
