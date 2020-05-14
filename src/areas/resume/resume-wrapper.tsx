import React from "react";
import ResumeHeader from "./resume-header";
import Experience from "./resume-experience";

const ResumeWrapper: React.FC = () => {
  return (
    <>
      <ResumeHeader />
      <Experience />
    </>
  );
};

export default ResumeWrapper;
