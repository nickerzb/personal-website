import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { resume } from "../constants/routes";

const NavBar = () => {
  return (
    <header>
      <Navbar expand="md" variant="dark" collapseOnSelect>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto" defaultActiveKey="/resume">
            <Nav.Link as={Link} to={resume} eventKey="/resume">
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavBar;
