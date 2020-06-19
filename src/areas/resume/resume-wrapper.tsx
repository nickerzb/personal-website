import React from "react";
import Experience from "./experience/experience-wrapper";
import Certifications from "./certifications/certification-wrapper";
import Technologies from "./technologies/technologies-wrapper";

const ResumeWrapper: React.FC = () => {
  return (
    <>
      <Experience />
      <Certifications />
      <Technologies />
    </>
  );
};

export default ResumeWrapper;
