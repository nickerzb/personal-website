import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about-styles.scss";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <Row id="about-me">
      <Col
        sm={{ offset: 1, span: 10 }}
        lg={{ offset: 2, span: 8 }}
        className="space-top-sm"
      >
        <Row>
          <Col>
            <Card>
              <Card.Title>
                <span className="section-header">About Me</span>
              </Card.Title>
              <Row>
                <Col xl={7}>
                  <Card.Body>
                    I'm a software engineer who has always enjoyed tinkering
                    with both software and hardware. I grew up in{" "}
                    <a
                      href="https://goo.gl/maps/N8NXqy2kMzvQUQmJA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Superior, WI
                    </a>
                    , and from a young age I was interested in
                    computers/technology. I remember breaking something on the
                    computer frequently, and having to fix it before my parents
                    noticed. I start programming my sophomore year of high
                    school, primarily in{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/BASIC"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BASIC
                    </a>
                    . My senior year, I started primarily with Java (AP Computer
                    Science), but also used some Javascript/Python for various
                    scripting needs. I went into college at the University of
                    Wisconsin - Eau Claire declared as a Computer Engineering
                    major, but my sophomore year that major was dropped, so I
                    switched to Computer Science. I still enjoy the hardware
                    side of technology though, having done a number of custom
                    builds for{" "}
                    <a
                      href="https://en.wikipedia.org/wiki/AutoCAD"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      AutoCAD
                    </a>{" "}
                    and gaming. I also have an adorable black lab named Jax.
                  </Card.Body>
                </Col>
                <Col className=" align-center" xl={5}>
                  <img
                    style={{ padding: ".75rem" }}
                    height="300"
                    alt="Nick in car"
                    src="/Nick_Goble_Profile.jpg"
                  />
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
        <Row className="space-top-lg">
          <Col>
            <Card>
              <Card.Title>
                <span className="section-header">For Fun</span>
              </Card.Title>
              <Card.Body>
                I absolutely love music; it allows us to communicate a range of
                emotion and sentiment that words alone cannot carry. I regularly
                go to live performances, the highest count being 100 unique
                artists in one year. My favorite venues include{" "}
                <a
                  href="https://www.bonnaroo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bonnaroo
                </a>
                ,{" "}
                <a
                  href="http://first-avenue.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  First Avenue
                </a>
                , and{" "}
                <a
                  href="https://palacestpaul.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Palace Theater
                </a>
                . I also love rock climbing. I usually climb indoors, but have
                gone on a couple trips to climb outdoors in the mountains. I've
                done various forms of weightlifting over the years, from
                powerlifting to CrossFit. Other interestes cars, motorcycles,
                audio, skiing, and traveling. Last October, I spent two weeks
                traveling all over Japan including: Tokyo, Osaka, Kyoto,
                Hiroshima, and Fukuoka.
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default About;
