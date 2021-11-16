import React from "react";
import styled from "styled-components";

const Styles = styled.div`
  .footer-wrapper {
    padding: 64px;
    display: flex;
    justify-content: center;
}
  }
  a, span {
    font-weight: 500;
    font-size: 10px;
    text-transform: uppercase;
    padding: 10px;
    color: ${(props) => props.theme.text.light};
  }
  a {
    text-decoration: none;
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
        <span>Email: sean.keisuke@gmail.com</span>
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
