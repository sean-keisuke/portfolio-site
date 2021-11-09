import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import "normalize.css";
import SEO from "./SEO";
import Theme from "./Theme";

const StyledPage = styled.div`
  max-width: 1080px;
  margin: auto;
`;

export default function Page({ children }) {
  return (
    <Theme>
      <SEO title="Sean Mullarkey" description="Portfolio for Sean Mullarkey" />
      <title>Sean Mullarkey</title>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />

      <StyledPage>{children}</StyledPage>
    </Theme>
  );
}

Page.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};
