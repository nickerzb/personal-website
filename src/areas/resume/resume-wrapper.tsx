import React from "react";
import Experience from "./experience/experience-wrapper";
import Certifications from "../certifications/certification-wrapper";

const ResumeWrapper: React.FC = () => {
  return (
    <>
      <Experience />
      <Certifications />
    </>
  );
};

export default ResumeWrapper;
