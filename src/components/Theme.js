import React from "react";
import { ThemeProvider, css, createGlobalStyle } from "styled-components";
import PropTypes from "prop-types";
import backgroundImg from "../images/background-img.jpeg"

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Roboto, sans-serif;
    color: ${(props) => props.theme.text.darkest};
    background-image: url("${backgroundImg}");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }

  a {
    color: inherit;
  }

  h1 {
    font-size: 48px;
  }

  h2 {
    font-size: 40px;
  }

  h3 {
    font-size: 20px;
  }

  p {
    line-height: 2em;
    font-size: 16px;
  }

  a{
    color: ${(props) => props.theme.text.dark};
    text-decoration: underline;
  }
`;

const theme = {
  primary: "",
  secondary: "",
  background: css`hsl(0, 0%, 100%)`,
  burgerIconBackground: `hsl(0, 0%, 12%)`,
  white: css`hsl(0, 0%, 100%)`,

  text: {
    lightest: css`hsl(0, 0%, 93%)`,
    lighter: css`hsl(0, 0%, 87%)`,
    light: css`hsl(0, 0%, 62%)`,
    dark: css`hsl(0, 0%, 31%)`,
    darker: css`hsl(0, 0%, 20%)`,
    darkest: css`hsl(0, 0%, 7%)`,
    blueHighlight: css`hsl(244, 43%, 50%)`,
    blogLinkHeader: css`hsl(0, 0%, 38%)`,
    blogLinkTitle: css`hsl(0, 0%, 11%)`,
    paragraph: css`#757575`,
  },

  button: css`hsl(0, 0%, 7%)`,
  buttonInverse: css`hsl(0, 0%, 93%)`,
};

export default function Theme({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};
