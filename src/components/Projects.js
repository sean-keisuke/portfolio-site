import React from "react";
import styled from "styled-components";
import IndividualProject from "./IndividualProject";
import CovidTrackerImg from "../images/Projects/covid-tracker-logo.png";
import MusicJudgeImg from "../images/Projects/music-judge-bot.png";

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

  @media screen and (max-width: 640px) {
    .featured-projects-wrapper {
      padding: 0;
    }
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
  {
    projectTitle: "Music Judge Discord Bot",
    projectDescription:
      "During the my final semester at Boise State University, a team of 3 including myself designed a discord bot that would play music from spotify and judge you for your musical taste based on the song's popularity.",
    buttonText: "READ MORE ABOUT THE MUSIC JUDGE PROJECT",
    imageName: "music-judge-discord-app",
    imageSrc: MusicJudgeImg,
    writeupLink: "/music-judge-bot",
  },
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
