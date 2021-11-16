import * as React from "react";
import styled from "styled-components";

const ThankYouStyles = styled.div`
  padding: 80px;
  h1 {
    font-size: 48px;
    letter-spacing: 4px;
  }
  p {
    color: ${(props) => props.theme.text.paragraph};
  }
  .thank-you-message-container {
    width: 50%;
    margin: auto;
    text-align: center;
  }

  @media screen and (max-width: 640px) {
    .thank-you-message-container {
      width: 100%;
    }
  }
`;

const ThankYouPage = () => (
  <ThankYouStyles>
    <div className="thank-you-message-container">
      <h1>I can't wait to talk to you!</h1>
      <p>You message was submitted successfully!</p>
      <p>
        <a href="/">Return to home page</a>
      </p>
    </div>
  </ThankYouStyles>
);

export default ThankYouPage;
