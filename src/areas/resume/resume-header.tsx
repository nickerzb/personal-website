import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ResumeHeader: React.FC = () => {
  return (
    <Row>
      <Col
        xs={6}
        sm={{ offset: 1, span: 5 }}
        md={{ offset: 2, span: 4 }}
        lg={{ offset: 3, span: 3 }}
      >
        <h4 className="title no-bottom-margin full-height align-right">
          Nick Goble
        </h4>
      </Col>
      <Col xs={6} sm={5} md={4} lg={3}>
        <span className="title no-bottom-margin vertical-center">
          <a
            href="mailto:nickerzb@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            nickerzb@gmail.com
          </a>
        </span>
      </Col>
    </Row>
  );
};

export default ResumeHeader;
