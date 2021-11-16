import * as React from "react";
import { Header, Footer } from "../components";
import styled from "styled-components";
import portfolioImg from "../images/home/handsome-man.jpg";

const IndexStyles = styled.div`
  padding: 0 64px;
  h1 {
    font-size: 48px;
  }
  h2 {
    text-align: center;
    font-size: 34px;
    cursor: pointer;
    transition-property: color;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out;
  }
  h2:hover {
    color: ${(props) => props.theme.text.light};
  }
  h1,
  h2 {
    text-align: center;
  }
  .banner {
    padding-bottom: 40px;
  }
  .about-me {
    display: flex;
    padding: 10px 17px 75px;
  }
  .about-me-text-wrapper {
    padding: 0px 20px 20px;
    width: 50%;
    h3 {
      margin-top: 0px;
    }
  }
  .about-me-image {
    width: 50%;
    img {
      width: 400px;
    }
  }
  p,
  ul {
    color: ${(props) => props.theme.text.paragraph};
  }
  .skillset-wrapper {
    display: flex;
    justify-content: center;
    background: white;
    padding: 10px;
    border-radius: 10px;
  }

  @media screen and (max-width: 640px) {
    padding: 0 17px;
    .about-me {
      display: block;
      .about-me-text-wrapper,
      .about-me-image {
        width: 100%;
        padding: 0px;
      }
      img {
        width: 100%;
      }
    }
  }
`;

const IndexPage = () => {
  const [softwareDeveloper, setSoftwareDeveloper] = React.useState(true);
  const [profession, setProfession] = React.useState("Software Developer");
  React.useEffect(() => {
    if (softwareDeveloper) {
      setProfession("Software Developer");
    } else {
      setProfession("Marching Percussion Instructor");
    }
  }, [softwareDeveloper]);

  return (
    <main>
      <Header />
      <IndexStyles>
        <div className="banner">
          <h1>Sean Mullarkey</h1>
          <h2 onClick={() => setSoftwareDeveloper(!softwareDeveloper)}>
            {profession}
          </h2>
        </div>
        <div className="about-me">
          <div className="about-me-text-wrapper">
            <h3>A little about me:</h3>
            {softwareDeveloper && (
              <div className="bio-container">
                <p>I am a software developer living in the Boise area.</p>
                <p>
                  After spending a year at University of Idaho in 2016-2017
                  before eventually transferring to Boise State University I
                  have graduated Cum Laude at in the Spring of 2021 with a
                  degree in Computer Science.
                </p>
                <p>
                  While I was wrapping up my computer science degree at Boise
                  State University, I have had the pleasure to work for various
                  clients as an intern, and eventually an employee of Zerrtech
                  as a Web/Software Developer. To see various projects I was
                  able to work on during my time at Zerrtech,
                  <br />
                  <a
                    href="http://www.zerrtech.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    click here
                  </a>
                  .
                </p>
              </div>
            )}
            {!softwareDeveloper && (
              <div className="bio-container">
                <p>
                  I am currently a marching percussion instructor based in the
                  Boise area. With over a decade of experience in performing and
                  educating, I am excited to help grow the marching percussion
                  scene in the greater Treasure Valley area.
                </p>
                <p>
                  I have been a member of various collegiate marching ensembles.
                  He was on the Snare Line at the University of Idaho in 2016.
                  He then transferred to Boise State University where he was
                  part of the Blue Thunder drumline from 2017 to 2019 where he
                  served as the Snare captain in his final season.
                </p>
                <p>
                  Along with having the pleasure to march with the Battalion
                  Drum and Bugle Corps on the snare line in their record
                  breaking season in 2019, I have participated in a season of
                  WGI as well as a member of the Rhythm Armada's 2019
                  production.
                </p>
                <p>
                  Over many years, I have taught at multiple programs in the
                  Treasure Valley during the fall marching season, as well as
                  the wgi season during the winter. I currently works at Rocky
                  Mountain High School as the percussion director under Quentin
                  Dewitt as well as being the Battery Percusion
                  director/Arranger at Rhythm Armada Percussion, an Independent
                  WGI ensemble based in Boise Idaho.
                </p>
                <p>
                  In my career as a musician, I have had the pleasure of being
                  taught by many influential educators in his marching career
                  including Pat Flaherty, Spencer Martin, James Harrison, Joe
                  Tornello, Ryan Hall, Alex Entin, Michael Williams, Tony
                  Teleky, and Roger Carter.
                </p>
              </div>
            )}
          </div>
          <div className="about-me-image">
            <img src={portfolioImg} alt="portfolio-pic" />
          </div>
        </div>
        {softwareDeveloper && (
          <div className="skillset-wrapper">
            <div className="skillset-column">
              <p>
                Known Languages:
                <ul>
                  <li>Java</li>
                  <li>HTML/CSS/SASS</li>
                  <li>Javascript</li>
                  <li>PHP</li>
                  <li>Ruby</li>
                  <li>Python</li>
                  <li>C</li>
                  <li>C++</li>
                  <li>C#</li>
                </ul>
              </p>
            </div>
            <div className="skillset-column">
              <p>
                Proficient Skill Sets:
                <ul>
                  <li>Object Oriented Programming</li>
                  <li>Agile Development</li>
                  <li>Version Control</li>
                  <li>Web Development</li>
                </ul>
              </p>
            </div>
            <div className="skillset-column">
              <p>
                Frameworks utilized for Client work:
                <ul>
                  <li>React</li>
                  <li>Gatsby</li>
                  <li>Django</li>
                  <li>Cypress</li>
                  <li>Pytest</li>
                  <li>GraphQL</li>
                </ul>
              </p>
            </div>
          </div>
        )}
        {!softwareDeveloper && (
          <div className="skillset-wrapper">
            <div className="skillset-column">
              <p>
                Programs taught:
                <ul>
                  <li>Rocky Mountain High School</li>
                  <li>Mountain View High School</li>
                  <li>Rhythm Armada Percussion</li>
                </ul>
              </p>
            </div>
            <div className="skillset-column">
              <p>
                Awards Received for Programs I Have Taught:
                <ul>
                  <li>
                    Best Overall Percussion Division 2 Open - Rocky Mountain,
                    Fall 2021 Season
                  </li>
                  <li>
                    1st Place Division 2 Open - Rocky Mountain, Fall 2021 Season
                  </li>
                  <li>
                    2nd Place Division 5A Small - Rocky Mountain, Fall 2021
                    Season
                  </li>
                  <li>
                    Sweepstakes 3rd Place - Rocky Mountain, Fall 2021 Season
                  </li>
                  <li>
                    2nd Place Overall Percussion - Mountain View, Winter 2020
                    Season
                  </li>
                </ul>
              </p>
            </div>
          </div>
        )}
      </IndexStyles>
      <Footer />
    </main>
  );
};

export default IndexPage;
