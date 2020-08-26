import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { resume, about } from "../constants/routes";
import "./navbar-styles.scss";
import NavLink from "react-bootstrap/NavLink";
import Button from "react-bootstrap/Button";
import { LinkContainer } from "react-router-bootstrap";

const NavBar = () => (
  <header>
    <Navbar expand="md" variant="dark" collapseOnSelect>
      <Navbar.Brand id="brand-logo" as={Button} href={`#/`}>
        N/G
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <LinkContainer to={resume}>
            <NavLink>Resume</NavLink>
          </LinkContainer>
          <LinkContainer to={about}>
            <NavLink>About</NavLink>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
);

export default NavBar;
