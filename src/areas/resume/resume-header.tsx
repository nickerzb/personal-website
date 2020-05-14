import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ResumeHeader: React.FC = () => {
  return (
    <div>
      <Row>
        <Col>
          <h4 className="align-center">Nick Goble</h4>
        </Col>
      </Row>
      <Row className="space-top-lg">
        <Col sm={6}>
          <h6 className="align-center title no-bottom-margin">Address:</h6>
          <p className="align-center text-align-center">
            7210 4th Avenue S
            <br />
            Richfield, MN
          </p>
        </Col>
        <Col sm={6}>
          <h6 className="align-center title no-bottom-margin">Contact Info:</h6>
          <p
            className="align-center text-align-center"
            style={{ display: "block" }}
          >
            <a
              href="mailto:nickerzb@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              nickerzb@gmail.com
            </a>
            <br />
            <a href="tel:2185909657" target="_blank" rel="noopener noreferrer">
              2185909657
            </a>
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default ResumeHeader;
