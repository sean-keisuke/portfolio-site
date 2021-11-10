import * as React from "react";
import styled from "styled-components";
import { Header, Footer } from "../components";
import CovidAppScreenshot1 from "../images/covid-tracker-app/CovidHistoryPage.png";
import CovidAppScreenshot2 from "../images/covid-tracker-app/CovidStatusPage.png";
import CovidAppScreenshot3 from "../images/covid-tracker-app/HomescreenWHistoryButton.png";
import CovidAppScreenshot4 from "../images/covid-tracker-app/SplashScreenWithPhone.png"


const CovidTrackerProjectsStyles = styled.div`
  padding: 17px;
  img {
    width: 100%;
  }
  p,
  ul {
    color: ${(props) => props.theme.text.paragraph};
  }
  .project-description {
    width: 66.6667%;
    margin: 0 auto 80px;
    background: ${(props) => props.theme.white};
    padding: 30px;
    border-radius: 10px;
  }
  h1 {
    text-align: center;
  }
  .about-the-project-container {
    width: 60%;
    margin: 80px auto 0;
  }
  .screenshot-row {
    display: flex;
    justify-content: center;
    img {
      width: 40%;
      padding: 17px;
    }
  }
  .github-link{
    text-align: center;
  }
  @media screen and (max-width: 640px) {
    .about-the-project-container {
      display: block;
    }
    .screenshot-row {
      display: block;
      img {
        width: 100%;
        padding: 0;
      }
    }
  }
`;

const CovidTrackerProjectPage = () => (
  <main>
    <Header />
    <CovidTrackerProjectsStyles>
      <div className="project-description">
        <h1>Covid Tracker Android Application</h1>
        <p>
          During the height of the pandemic, all of Boise State University's
          computer science classes were held online. One of the classes I had
          the pleasure to take during the pandemic was Android development. We
          were tasked to create a functional app written in Kotlin that would
          showcase important android development fundamentals in a unique
          manner.
        </p>
        <p>
          Because we were in a pandemic I decided to create an app that
          communicates with an API that gives me daily covid statistics based on
          location by state{" "}
          <a href="https://api.covidtracking.com/" target="_blank">
            (covid tracker API)
          </a>
          . This API allows us to track the progress of covid across the United
          States and gives us important information such as death rates and
          positive rates. The main purpose of this app is to help visualize
          this. A user can check current covid data for any state they choose by
          using the select menu at the top. Each state is essentially a new API
          call to a different endpoint. Using the data retrieved from the
          selected state, a user can then check to see historical data by date
          in the Covid History Activity.
        </p>
        <p>
          Some important features included in the application:
          <ul>
            <li>Current Covid Positive/Death Rates given by state</li>
            <li>View Daily history of Covid Stats by any given state</li>
            <li>View Daily history of Covid Stats by any given state</li>
            <ul>
              <li>Which Vaccine was received</li>
              <li>Which Dosage</li>
              <li>When it was received</li>
              <li>Which Pharmacy Administered Vaccination</li>
              <li>All Stored Within Database!</li>
            </ul>
            <li>Take a celebratory picture of your vaccination!</li>
          </ul>
        </p>
        <div className="screenshot-row">
          <img src={CovidAppScreenshot4} alt="covid-screenshot-4"></img>
          <img src={CovidAppScreenshot3} alt="covid-screenshot-3"></img>
        </div>
        <div className="screenshot-row">
          <img src={CovidAppScreenshot1} alt="covid-screenshot-1"></img>
          <img src={CovidAppScreenshot2} alt="covid-screenshot-2"></img>
        </div>
        <p className="github-link">
          <a
            href="https://github.com/sean-keisuke/Covid-Tracker-App/"
            target="_blank"
          >
            <span>Github Repository for project</span>
          </a>
        </p>
      </div>
    </CovidTrackerProjectsStyles>
    <Footer />
  </main>
);

export default CovidTrackerProjectPage;
