import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .footer-wrapper {
    padding: 64px;
    display: flex;
    justify-content: center;
}
  }
  a {
    font-weight: 500;
    font-size: 10px;
    text-transform: uppercase;
    padding: 10px;
    text-decoration: none;
    color: ${(props) => props.theme.text.light};
    transition: color 0.3s ease-in-out;
  }
  a:hover {
    color: ${(props) => props.theme.text.lighter};
  }
`;

export default function Footer() {
  return (
    <Styles>
      <div className="footer-wrapper">
        <a
          href="https://www.linkedin.com/in/sean-mullarkey-25b07b205/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
        <a
          href="https://github.com/sean-keisuke"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
      </div>
    </Styles>
  );
}
