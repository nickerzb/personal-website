import React from "react";
import { github } from "../constants/routes";

const footer = () => (
  <footer className="align-center">
    <a
      href="mailto:nickerzb@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Email
    </a>
    <span className="space-around">|</span>
    <a href={github} target="_blank" rel="noopener noreferrer">
      Source Code
    </a>
  </footer>
);

export default footer;
