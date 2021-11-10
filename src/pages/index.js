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
    font-size: 34px;
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
    padding: 20px;
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
  @media screen and (max-width: 640px) {
    padding: 0 17px;
    .about-me {
      display: block;
      .about-me-text-wrapper, .about-me-image {
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
  return (
    <main>
      <Header />
      <IndexStyles>
        <div className="banner">
          <h1>Sean Mullarkey</h1>
          <h2>Software Developer</h2>
        </div>
        <div className="about-me">
          <div className="about-me-text-wrapper">
            <h3>A little about me</h3>
            <p>
              A Software Developer by day, Marching Band Instructor by night.
            </p>
            <p>
              After graduating from Boise State University, Sean has had the
              pleasure to work for various clients as an employee of{" "}
              <a href="https://www.zerrtech.com" target="_blank" rel="noreferrer">
                Zerrtech
              </a>{" "}
              as a Web/Software Developer.
            </p>
            <p>
              Sean is also currently working as a Marching Percussion Director
              for several High School programs across the Treasure Valley. He is
              also the current Battery Caption Head at Rhythm Armada
              Independent, Boise's only WGI independent group.
            </p>
          </div>
          <div className="about-me-image">
            <img src={portfolioImg} alt="portfolio-pic" />
          </div>
        </div>
      </IndexStyles>
      <Footer />
    </main>
  );
};

export default IndexPage;
