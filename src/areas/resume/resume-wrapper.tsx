import React from "react";
import ResumeHeader from "./resume-header";
import Experience from "./experience/experience-wrapper";
import Certifications from "../certifications/certification-wrapper";

const ResumeWrapper: React.FC = () => {
  return (
    <>
      <ResumeHeader />
      <Experience />
      <Certifications />
    </>
  );
};

export default ResumeWrapper;
