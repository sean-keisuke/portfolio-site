import * as React from "react";
import styled from "styled-components";
import { Header, Footer } from "../components";
import MusicJudgeScreenshot1 from "../images/music-judge-bot/distest-img.png";
import MusicJudgeScreenshot2 from "../images/Projects/music-judge-bot.png";
import MusicJudgeScreenshot3 from "../images/music-judge-bot/audio-db-img.png";

const MusicJudgeBotStyles = styled.div`
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
  .github-link {
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

const MusicJudgeBotPage = () => (
  <main>
    <Header />
    <MusicJudgeBotStyles>
      <div className="project-description">
        <h1>Music Judge Discord Bot</h1>
        <p>
          During my final semester at Boise State University, two guys and
          myself designed a discord bot for our senior project. Due to the fact
          we were still in the middle of the pandemic, we didn't have a chance
          to take on client based work like a typical year. So instead, we decided to
          design a project where it was fun, interactive, and taught us basic
          skills that are utilized in modern industry practices.
        </p>
        <p>
          The Music Judge is a discord bot written in python that allowed a user
          to play music from Spotify for the whole channel to hear, and then
          have their music selection ranked by popularity against every other
          user in the channel. This bot is hooked to two different web API. This
          bot would first fetch a song to play from the{" "}
          <a
            href="https://developer.spotify.com/documentation/web-api/"
            target="_blank"
            rel="noreferrer"
          >
            <span>Spotify API</span>
          </a>{" "}
          based on a user's request.
        </p>
        <div className="distest-img-wrapper">
          <img src={MusicJudgeScreenshot2} alt="music-play-screenshot"></img>
        </div>
        <p>
          After selecting a song, the bot would also rank that user's against
          other users' musical taste within the discord channel by analyzing
          certain statistics through the{" "}
          <a
            href="https://www.theaudiodb.com/api_guide.php"
            target="_blank"
            rel="noreferrer"
          >
            <span>AudioDB API</span>
          </a>
          . This API allowed us to see multiple important statistics such as
          popularity of a song based on it's music video like/dislike ratio on
          youtube. Through this statistic, we allowed the bot to calculate a
          percentage per song as well as an average percentage for a user's
          musical taste based on every song they have requested from the bot. As
          long as the bot is active, this information is stored within a Python
          backend.
        </p>
        <div className="distest-img-wrapper">
          <img src={MusicJudgeScreenshot3} alt="music-play-screenshot"></img>
        </div>
        <p>
          Part of our deliverable included adding a testing framework to our bot
          that would work in conjunction with Github's Continuous Integration
          system. Because we were using the discord framework to build our
          application, we wanted to utilize a testing framework that not only
          tested the python code that the bot was written in but also the bot's
          functionality. After some digging we found an experimental testing
          framework called{" "}
          <a
            href="https://pypi.org/project/distest/"
            target="_blank"
            rel="noreferrer"
          >
            <span> Distest</span>
          </a>
          .
        </p>
        <div className="distest-img-wrapper">
          <img src={MusicJudgeScreenshot1} alt="distest-screenshot"></img>
        </div>
        <p>
          This framework allowed us to fully check the bot's functionality for
          every possible command we have created. Essentially, the distest
          framework creates a separate discord bot that can interact with our
          main application and supply multiple commands quickly. With each
          command comes with an assertion of whether we retrieved the expected
          results.
        </p>
        <p>
          With any testing framework for applications that utilize external
          API's we wanted to be careful not to run our minutes with how many API
          calls each command actually utilizes, especially for the AudioDB API
          which costs significantly more than our Spotify API account. We
          decided to move forward with a mocking pattern, where the bot will
          supply an external flag with each command (--test) that allowed the
          bot to not hit an actual endpoint but supply mocked data so that we
          can still test functionality without ever using any API calls within
          the testing framework.
        </p>
        <p>
          Some important features included in the application:
          <ul>
            <li>Play a song per a user's request</li>
            <ul>
              <li>Can search for songs using certain keywords to filter</li>
              <li>
                Using the "by" keyword, you can search for a song by artist
              </li>
              <li>
                Using the "from" keyword, you can search for a song by album
              </li>
            </ul>
            <li>
              Bot can give musical taste rankings for every member within a
              discord channel
            </li>
            <ul>
              <li>
                If song selected has a low "like to dislike" ratio according to
                it's youtube music video, the bot will make fun of you for
                liking "bad" music
              </li>
              <li>
                If song selected is popular and has a high "like to dislike"
                ratio on audioDB then bot will make fun of you for liking
                mainstream music.
              </li>
            </ul>
            <li>Built within Docker container</li>
            <li>
              Utilized experimental "Distest" discord bot testing framework
            </li>
            <ul>
              <li>Mocked Data to avoid hitting live API for testing</li>
            </ul>
            <li>Bot hosted on Heroku</li>
          </ul>
        </p>
      </div>
    </MusicJudgeBotStyles>
    <Footer />
  </main>
);

export default MusicJudgeBotPage;
