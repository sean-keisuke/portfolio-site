import * as React from "react";
import { Header, Footer } from "../components";
import styled from "styled-components";

const IndexStyles = styled.div`
  padding: 0 64px;
  h1 {
    font-size: 48px;
  }
  h2 {
    font-size: 34px;
  }
  h1, h2 {
    text-align: center;
  }
  p,
  ul {
    color: ${(props) => props.theme.text.paragraph};
  }
  @media screen and (max-width: 640px) {
    padding: 0 17px;
  }
`;

const IndexPage = () => {
  return (
    <main>
      <Header />
      <IndexStyles>
      <h1>Sean Mullarkey</h1>
      <h2>Software Developer</h2>
      <div>This is a placeholder for index page.</div>
      </IndexStyles>
      <Footer />
    </main>
  );
};

export default IndexPage;
