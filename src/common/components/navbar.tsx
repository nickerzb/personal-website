import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { resume, about, home } from "../constants/routes";
import Button from "react-bootstrap/Button";
import "./navbar-styles.scss";

const NavBar = () => (
  <header>
    <Navbar expand="md" variant="dark" collapseOnSelect>
      <Navbar.Brand id="brand-logo" as={Button} href={`/#${home}`}>
        N/G
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto" defaultActiveKey={resume}>
          <Nav.Link as={Link} to={resume} eventKey={resume}>
            Resume
          </Nav.Link>
          <Nav.Link as={Link} to={about} eventKey={about}>
            About
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default NavBar;
