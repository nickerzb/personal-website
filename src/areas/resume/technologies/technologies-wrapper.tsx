import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Icon } from "@iconify/react";
import Card from "react-bootstrap/Card";
import { namesWithIcons, NamedIcon } from "./technologies-list";

const nameSort = (a: NamedIcon, b: NamedIcon) => a.name.localeCompare(b.name);

const Technologies: React.FC = () => {
  return (
    <>
      <Row className="space-top-lg">
        <Col>
          <h4 className="section-header no-bottom-margin">Technologies</h4>
        </Col>
      </Row>
      <Row>
        <Col className="space-top-sm">
          <Row>
            {namesWithIcons.sort(nameSort).map(({ name, icon }) => (
              <Col sm={4} xs={6}>
                <Card className="margin-top-sm align-center">
                  <Card.Body>
                    <Icon {...icon} />
                    <span style={{ paddingLeft: "5px" }}>{name}</span>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Technologies;
