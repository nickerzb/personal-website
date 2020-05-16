import React from "react";
import ResumeHeader from "./resume-header";
import Experience from "./experience/experience-wrapper";

const ResumeWrapper: React.FC = () => {
  return (
    <>
      <ResumeHeader />
      <Experience />
    </>
  );
};

export default ResumeWrapper;
