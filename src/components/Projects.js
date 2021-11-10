import React from "react";
import styled from "styled-components";
import IndividualProject from "./IndividualProject";
import CovidTrackerImg from "../images/Projects/covid-tracker-logo.png"

const Styles = styled.div`
  .featured-projects-wrapper {
    padding: 0 64px;
  }
  .featured-project-container {
    background: white;
  }
  h1 {
    text-align: center;
    margin: 0 0 30px;
    padding: 16px;
    font-size: 48px;
  }
`;

const projects = [
  {
    projectTitle: "Covid Tracker Android App",
    projectDescription:
      "During the height of the Covid pandemic, I created an Android Application to keep track of Daily Covid Statistics such as daily positive or death rates.",
    buttonText: "READ MORE ABOUT THE COVID TRACKER PROJECT",
    imageName: "covid-tracker-app",
    imageSrc: CovidTrackerImg,
    writeupLink: "/covid-tracker-project",
  },
  // {
  //   projectTitle: "Vacasa Executive Dashboard",
  //   projectDescription:
  //     "We created an Executive Dashboard for Vacasa to visualize their critical Key Performance Indicators (KPI) across the entire company.  We used React along with D3.js to create dynamic data visualizations using charts and maps.",
  //   buttonText: "READ MORE ABOUT THE VACASA PROJECT",
  //   imageName: "vacasa-map",
  //   imageLink: "/vacasa-executive-dashboard",
  //   writeupPrompt: "See our full Vacasa Executive Dashboard writeup.",
  //   writeupLink: "/vacasa-executive-dashboard",
  // },
];

export default function Projects() {
  return (
    <Styles>
      <h1>Featured Projects</h1>
      <div className="featured-projects-wrapper">
        {projects.map((project) => (
          <IndividualProject
            key={project.projectTitle}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            buttonText={project.buttonText}
            imageName={project.imageName}
            imageSrc={project.imageSrc}
            writeupLink={project.writeupLink}
          />
        ))}
      </div>
    </Styles>
  );
}
