import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home: React.SFC = () => {
  return (
    <Row>
      <Col
        sm={{ offset: 1, span: 10 }}
        lg={{ offset: 2, span: 8 }}
        xl={{ offset: 3, span: 6 }}
        className="space-top-sm"
      >
        <Row>
          <Col>
            <h4 className="section-header no-bottom-margin">WIP</h4>
          </Col>
        </Row>
        <Row></Row>
      </Col>
    </Row>
  );
};

export default Home;
